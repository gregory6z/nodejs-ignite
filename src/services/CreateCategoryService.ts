import { CategoriesRepository } from "../repositories/CategoriesRepositories";

interface IRequest {
  name: string;
  description: string;
}
/**
 * [] definir o tipo de retorno
 * [x] Alterar o retorno de error
 * [] Acessar o repositorio
 * [] Retornar algo
 */

export class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
