import { Category } from "../model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

export class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }): void {
    console.log(name, description);
  }
}
