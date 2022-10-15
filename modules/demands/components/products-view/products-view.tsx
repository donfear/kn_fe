import React from "react";
import {ProductsViewContainer, ProductsViewHeaderLabelWrapper, ProductsViewControls, ProductViewTableWrapper} from "./products-view.styles";
import {Box, Divider, Typography} from "@mui/material";
import {ProductsFilters} from "./products-filters/products-filters";
import {ProductsSearch} from "./products-search/products-search";
import ProductsList from "./products-list/products-list";
import {ProductDetails} from "./product-details/product-details";
import {ComponentProps} from "../../../../shared/types/interfaces/component-props.interface";

export class ProductsView extends React.Component<ComponentProps> {

  render() {
    return (
      <Box display={'flex'}>

        <Box display={'flex'} flexDirection={'column'} flex={'1'} maxWidth={'1152px'}>

          <ProductsViewContainer>

            <ProductsViewHeaderLabelWrapper>
              <Typography variant={'h6'}>I’m looking for...</Typography>
            </ProductsViewHeaderLabelWrapper>

            <Divider/>

            <ProductsViewControls>
              <ProductsFilters/>

              <ProductsSearch/>
            </ProductsViewControls>

          </ProductsViewContainer>

          <ProductViewTableWrapper>
            <ProductsList/>
          </ProductViewTableWrapper>

        </Box>
        <Box>
          <ProductDetails/>
        </Box>
      </Box>
    )
  }
}
