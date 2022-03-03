import { ICategoriesRepository } from "../modules/cars/repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
/**
 * [] definir o tipo de retorno
 * [x] Alterar o retorno de error
 * [] Acessar o repositório
 * [] Retornar algo
 */

export class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
