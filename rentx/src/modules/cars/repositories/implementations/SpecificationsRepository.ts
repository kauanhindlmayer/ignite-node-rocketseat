import { Specification } from "../../entities/Specification";
import {
  ISpecificationRepository,
  ICreateSpecifictionDTO,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ICreateSpecifictionDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_ad: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificationRepository };
