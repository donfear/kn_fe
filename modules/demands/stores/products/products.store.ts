import {action, flow, FlowCancellationError, makeObservable, observable, toJS} from "mobx";
import {ProductsFilterStore} from "./filter/filter.store";
import {ProductsService} from "../../services/products.service";
import type {IProduct} from "../../types/interfaces/product.interface";
import {CancellablePromise} from "mobx/dist/api/flow";

export class ProductsStore {
  static _name = 'productsStore';

  public readonly filterStore: ProductsFilterStore;

  @observable products: IProduct[] = [];

  private _productsService: ProductsService;

  private _cancellableLoadProductsPromise: CancellablePromise<void>;

  constructor() {
    this.filterStore = new ProductsFilterStore();
    this._productsService = new ProductsService();

    makeObservable(this);
  }

  @action setProducts(value: IProduct[]) {
    this.products = value;
  }

  @observable isLoading: boolean = false;

  @action setLoading(value: boolean) {
    this.isLoading = value;
  }

  private _loadProducts = flow(function* () {
    if (!this.filterStore.selectedFilters.length && !this.filterStore.searchText.length) {
      this.setProducts([]);
      return;
    }

    this.setLoading(true);
    try {
      const products = yield this._productsService.getProducts({
        categories: this.filterStore.selectedFilters,
        text: this.filterStore.searchText,
      });

      this.setProducts(products);
    } catch (e) {
    } finally {
      this.setLoading(false);
    }
  })

  async loadProducts(): Promise<void> {
    this._cancellableLoadProductsPromise?.cancel();

    this._cancellableLoadProductsPromise = this._loadProducts();

    await this._cancellableLoadProductsPromise.catch(e => {
      if (e instanceof FlowCancellationError) {
        return;
      }
      throw e;
    });
  }
}
