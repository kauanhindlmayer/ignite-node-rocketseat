import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listCarsUseCase: ListCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      brand: "brand",
      description: "description",
      daily_rate: 140,
      license_plate: "1234",
      fine_amount: 60,
      category_id: "50c78544-37ee-4031-a42f-373ac0b82348",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      brand: "brand",
      description: "description",
      daily_rate: 140,
      license_plate: "1234",
      fine_amount: 60,
      category_id: "50c78544-37ee-4031-a42f-373ac0b82348",
    });

    const cars = await listCarsUseCase.execute({
      brand: "brand",
    });

    expect(cars).toEqual([car]);
  });
});
