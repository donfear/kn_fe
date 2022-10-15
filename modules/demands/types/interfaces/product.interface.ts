import {EProductCategory} from "../enums/category.enum";

export interface IProduct {
  productName: string,
  tags: string[],
  id: number,
  category: EProductCategory,
  manufacturerUrl: string,
  description: string[],
  option1?: string,
  option2?: string,
}
