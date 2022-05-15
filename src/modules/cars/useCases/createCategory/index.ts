import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

export const createCategoryUseCase = new CreateCategoryUseCase(
  categoriesRepository,
);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);
