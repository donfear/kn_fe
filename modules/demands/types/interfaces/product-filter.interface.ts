import {EProductCategory} from "../enums/category.enum";

export interface IProductFilter {
  categories: EProductCategory[],
  text: string,
}
