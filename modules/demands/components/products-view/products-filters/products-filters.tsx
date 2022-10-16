import React from "react";
import {disposeOnUnmount, inject, observer} from "mobx-react";
import {ProductsStore} from "../../../stores/products/products.store";
import {ComponentProps} from "../../../../../shared/types/interfaces/component-props.interface";
import {ProductsFilterStore} from "../../../stores/products/filter/filter.store";
import {reaction} from "mobx";
import {Box, Checkbox, FormControlLabel} from "@mui/material";
import {ProductsFiltersLabel} from "./products-filters.styles";

@inject(ProductsStore._name)
@observer
export class ProductsFilters extends React.Component<ComponentProps> {
  private _productsStore: ProductsStore = this.props[ProductsStore._name];
  private _productsFilterStore: ProductsFilterStore = this.props[ProductsStore._name].filterStore;

  @disposeOnUnmount
  private _filtersChangeReactionDisposer = reaction(
    () => this._productsFilterStore.selectedFilters,
    () => this._productsStore.loadProducts(),
  );

  render() {
    return (
      <Box>
        {this._productsFilterStore.filters.map((filter, index) => (
          <FormControlLabel
            key={index}
            data-product-category-filter
            sx={{marginRight: '82px'}}
            onChange={(_, isChecked) => this._productsFilterStore.updateSelectedFilter(filter.category, isChecked)}
            control={<Checkbox
              sx={{color: "rgba(0, 0, 0, 0.05)"}}
            />}
            label={<ProductsFiltersLabel>{filter.label}</ProductsFiltersLabel>}
            labelPlacement="end"
          />
        ))}
      </Box>
    )
  }
}
