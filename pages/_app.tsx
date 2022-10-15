import type {AppProps} from 'next/app'
import React from 'react';
import {Provider as MobxProvider} from 'mobx-react';
import {ProductsStore} from "../modules/demands/stores/products/products.store";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "../theme/theme";
import {ProductStore} from "../modules/demands/stores/product/product.store";

export default class MyApp extends React.Component<AppProps> {

  private _mobxStores = {
    [ProductsStore._name]: new ProductsStore(),
    [ProductStore._name]: new ProductStore(),
  };

  render() {
    const {Component, pageProps} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MobxProvider {...this._mobxStores}>
          <Component {...pageProps} />
        </MobxProvider>
      </ThemeProvider>
    )
  }
}

