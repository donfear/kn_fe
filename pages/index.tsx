import React from 'react'
import {DemandsPageWrapper, DemandsPageContainer} from '../styles/demands-page.styles'
import DemandsHeader from '../modules/demands/components/header/header'
import DemandsTabs from '../modules/demands/components/tabs/tabs'
import {ETab} from "../modules/demands/types/enums/tab.enum";
import {ProductsView} from "../modules/demands/components/products-view/products-view";
import {inject, observer} from "mobx-react";
import {
  productDetailsMarginLeft,
  productDetailsWidth
} from "../modules/demands/components/products-view/product-details/product-details.styles";
import {Box} from "@mui/material";
import {ProductStore} from "../modules/demands/stores/product/product.store";

@inject(ProductStore._name)
@observer
export default class Demands extends React.Component {
  private _productStore: ProductStore = this.props[ProductStore._name];

  render() {
    const productDetailsTotalWidth: number = (productDetailsWidth + productDetailsMarginLeft);

    return (
      <DemandsPageWrapper>
        <DemandsPageContainer
          sx={{
            marginLeft: productDetailsTotalWidth + 'px',
            ...!this._productStore.hasSelectedProduct
              ? {
                marginRight: productDetailsTotalWidth + 'px',
              }
              : {
                paddingRight: '16px',
              }
          }}>

          <Box sx={{width: '100%',}}>
            <DemandsHeader/>

            <DemandsTabs
              tabs={[
                {value: ETab.PRODUCT, content: <ProductsView/>},
                {value: ETab.ADDRESSES,},
                {value: ETab.OVERVIEW,},
              ]}
            />
          </Box>

        </DemandsPageContainer>
      </DemandsPageWrapper>
    )
  }
}
