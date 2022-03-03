/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Category } from "../model/Category";
import { ICategoriesRepository, ICreteCategoryDTO } from "./ICategoriesRepository";



class CategoriesRepository implements ICategoriesRepository{
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreteCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
  list(): Category[] {
    return this.categories;
  }
  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
