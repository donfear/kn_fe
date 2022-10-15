import React from "react";
import {ProductDetailsManufacturerButton, ProductsDetailsContainer, ProductsDetailsContent} from "./product-details.styles";
import {ProductsViewHeaderLabelWrapper} from "../products-view.styles";
import {Box, Chip, Divider, Typography} from "@mui/material";
import {inject, observer} from "mobx-react";
import {ComponentProps} from "../../../../../shared/types/interfaces/component-props.interface";
import {action, makeObservable, observable} from "mobx";
import {ProductDetailsRadio} from "./product-details-radio/product-details-radio";
import {ProductStore} from "../../../stores/product/product.store";

interface ProductDetailsProps extends ComponentProps {

}

@inject(ProductStore._name)
@observer
export class ProductDetails extends React.Component<ProductDetailsProps> {

  private _productStore: ProductStore = this.props[ProductStore._name];

  private _productDetailsContainerRef = React.createRef<HTMLDivElement>();

  private _prevRef = null;

  @observable detailsContentHeight: number = null;

  constructor(props) {
    super(props);
    makeObservable(this);
  }

  handleGoToManufacturerClick() {
    const url = this._productStore.selectedProduct.manufacturerUrl;
    window.open(url, '_blank');
  }

  @action setDetailsContentHeight(value: number) {
    this.detailsContentHeight = value
  }

  updateContentHeights() {
    const detailsContainerOffsetTop = this._productDetailsContainerRef.current?.offsetTop;
    const pageHeight = window.innerHeight;

    this.setDetailsContentHeight(!!detailsContainerOffsetTop ? pageHeight - detailsContainerOffsetTop : 0);
  }

  handleResize = () => {
    this.updateContentHeights();
  }

  componentDidMount() {
    this.updateContentHeights();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    if (this._prevRef !== this._productDetailsContainerRef.current) {
      this.updateContentHeights();
    }
    this._prevRef = this._productDetailsContainerRef.current;
  }

  render() {
    const product = this._productStore.selectedProduct;

    if (!product) {
      return null;
    }
    return (
      <ProductsDetailsContainer>

        <ProductsViewHeaderLabelWrapper>
          <Typography variant={'h6'}>Product Details</Typography>
        </ProductsViewHeaderLabelWrapper>

        <Divider/>

        <ProductsDetailsContent
          ref={this._productDetailsContainerRef}
          style={{maxHeight: this.detailsContentHeight}}
        >
          <Typography variant={'h5'}>
            {product.productName}
          </Typography>

          <Box mt={'21px'} display={'flex'} flexWrap={'wrap'}>
            {product.tags.map((tag, index) => <Box key={index}>
              <Chip label={tag}/>
            </Box>)}
          </Box>

          <Box mt={'16px'}>
            <ProductDetailsManufacturerButton
              onClick={() => this.handleGoToManufacturerClick()}
            >
              <Typography variant={'subtitle1'} fontWeight={500}>
                Go to manufacturer
              </Typography>
            </ProductDetailsManufacturerButton>
          </Box>

          <Box mt={'11px'}>
            {
              product.description.map((paragraph, index) => (
                <Typography variant={'subtitle1'} lineHeight={'24px'} key={index} paragraph>
                  {paragraph}
                </Typography>
              ))
            }
          </Box>

          {
            product.option1 && product.option2 &&
            <ProductDetailsRadio {...product}/>
          }
        </ProductsDetailsContent>

      </ProductsDetailsContainer>
    );
  }
}
