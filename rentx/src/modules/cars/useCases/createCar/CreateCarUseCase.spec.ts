import { AppError } from "@shared/errors/AppError";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../createCar/CreateCarUseCase";

let carsRepository: CarsRepositoryInMemory;
let createCarUseCase: CreateCarUseCase;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "name",
      description: "description",
      daily_rate: 100,
      license_plate: "license_plate",
      fine_amount: 60,
      brand: "brand",
      category_id: "category_id",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with existing license_plate", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "first Car",
        description: "description",
        daily_rate: 100,
        license_plate: "license_plate",
        fine_amount: 60,
        brand: "brand",
        category_id: "category_id",
      });

      await createCarUseCase.execute({
        name: "second Car",
        description: "description",
        daily_rate: 100,
        license_plate: "license_plate",
        fine_amount: 60,
        brand: "brand",
        category_id: "category_id",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "name",
      description: "description",
      daily_rate: 100,
      license_plate: "license_plate",
      fine_amount: 60,
      brand: "brand",
      category_id: "category_id",
    });

    expect(car.available).toBe(true);
  });
});
