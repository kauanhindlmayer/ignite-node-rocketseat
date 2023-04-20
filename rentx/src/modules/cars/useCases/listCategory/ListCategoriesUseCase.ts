import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  execute(): Promise<Category[]> {
    const categories = this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
