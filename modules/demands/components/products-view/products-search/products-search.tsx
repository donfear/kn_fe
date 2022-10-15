import React from "react";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '../../../../../assets/svg/search.svg';
import {ProductsStore} from "../../../stores/products/products.store";
import {ProductsFilterStore} from "../../../stores/products/filter/filter.store";
import {disposeOnUnmount, inject, observer} from "mobx-react";
import {reaction} from "mobx";

@inject(ProductsStore._name)
@observer
export class ProductsSearch extends React.Component<any, any> {
  private _productsStore: ProductsStore = this.props[ProductsStore._name];
  private _productsFilterStore: ProductsFilterStore = this.props[ProductsStore._name].filterStore;

  @disposeOnUnmount
  private _filtersChangeReactionDisposer = reaction(
    () => this._productsFilterStore.searchText.length,
    () => this._productsStore.loadProducts()
  );

  render() {
    return (
        <TextField
          placeholder="Type here..."
          variant="outlined"
          size={"small"}
          sx={{
            backgroundColor: '#F5F6F7',
            borderRadius: '2px',
          }}
          fullWidth
          onChange={(e) => this._productsFilterStore.setSearchText(e.target.value)}
          InputProps={{
            sx: (theme) => ({
              fontSize: '14px',
              lineHeight: '19px',
              padding: '0 0 0 5px',
              color: theme.palette.text.primary,
            }),
            startAdornment: (
              <InputAdornment position="start" >
                <SearchIcon/>
              </InputAdornment>
            ),
          }}
        />
    )
  }
}
