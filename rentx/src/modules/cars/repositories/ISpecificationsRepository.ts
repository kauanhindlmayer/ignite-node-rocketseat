import { Specification } from "../entities/Specification";

interface ICreateSpecifictionDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ description, name }: ICreateSpecifictionDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecifictionDTO };
