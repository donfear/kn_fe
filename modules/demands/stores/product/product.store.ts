import {action, computed, makeObservable, observable} from "mobx";
import type {IProduct} from "../../types/interfaces/product.interface";

export class ProductStore {
  static _name: string = 'productStore';

  @observable selectedProduct: IProduct = null;

  constructor() {
    makeObservable(this);
  }

  @action setSelectedProduct(data: IProduct) {
    this.selectedProduct = this.isSelectedProduct(data.id) ? null : {...data};
  }

  @computed get hasSelectedProduct(): boolean {
    return !!this.selectedProduct;
  }

  public isSelectedProduct(id: number) {
    return this.selectedProduct?.id === id;
  }

}
