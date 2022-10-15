import {action, computed, makeObservable, observable} from "mobx";
import {EProductCategory} from "../../../types/enums/category.enum";

export class ProductsFilterStore {
  static _name: string = 'productFilterStore';

  public readonly filters: { label: string, category: EProductCategory }[] = [
    {label: 'Software Development', category: EProductCategory.SOFTWARE_DEVELOPMENT},
    {label: 'Daily Business', category: EProductCategory.DAILY_BUSINESS},
    {label: 'Graphic Editors', category: EProductCategory.GRAPHIC_EDITORS},
    {label: 'Text Editors', category: EProductCategory.TEXT_EDITORS},
    {label: 'Management Tools', category: EProductCategory.MANAGEMENT_TOOLS},
  ];

  @observable selectedFilters: EProductCategory[] = []; // selected categoring
  @observable searchText: string = '';

  constructor() {
    makeObservable(this);
  }

  @action updateSelectedFilter(value: EProductCategory, isActive: boolean) {
    this.selectedFilters = !isActive
      ? [...this.selectedFilters.filter(f => f !== value)]
      : [...this.selectedFilters, value];
  }

  @action setSearchText(value: string) {
    this.searchText = value;
  }

  @computed get isFiltering(): boolean {
    return !!this.searchText.length || !!this.selectedFilters.length;
  }


}
