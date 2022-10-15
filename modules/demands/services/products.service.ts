import {IProductFilter} from "../types/interfaces/product-filter.interface";
import {HttpService} from "../../../shared/services/http.service";
import {IProduct} from "../types/interfaces/product.interface";

export class ProductsService extends HttpService {

  private _normalizeProductsData(products: IProduct[]): IProduct[] {
    return products.map((product, id) => ({
      ...product,
      id,
      tags: !product.tags ? [] : product.tags.flatMap(tag => tag.split(','))
    }))
  }

  private _filterProductsByName(products: IProduct[], text: string) {
    return products.filter(product => product.productName.toLowerCase().includes(text.toLowerCase()))
  }

  private _filterProductsByCategories(products: IProduct[], categories: string[]) {
    return products.filter(product => categories.includes(product.category));
  }

  async getProducts(filter: IProductFilter = {categories: [], text: null,}): Promise<IProduct[]> {
    let products = await this.sendGET<IProduct[]>('/products.json').then(this._normalizeProductsData);

    const {categories, text} = filter;

    if (!!text) {
      products = this._filterProductsByName(products, text);
    }

    if (!!categories.length) {
      products = this._filterProductsByCategories(products, categories)
    }

    // Imitate fetching
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 750));

    return products;
  }
}
