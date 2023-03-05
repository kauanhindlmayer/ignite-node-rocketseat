import { Specification } from "../model/Specification";

interface ICreateSpecifictionDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ description, name }: ICreateSpecifictionDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecifictionDTO };
