/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Category } from "../model/Category";

interface ICreteCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
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
}

export { CategoriesRepository };
