import React from "react";
import {ProductsListItem} from "./products-list-item/products-list-item";
import {
  ProductListScrollToTopButtonContainer,
  ProductsListContainer,
  ProductListScrollToTopButton,
  ProductListUnfilledTableContent
} from "./product-list.styles";
import {observable, action, makeObservable, computed} from "mobx";
import {inject, observer} from "mobx-react";
import {ProductsStore} from "../../../stores/products/products.store";
import ScrollToTopIcon from '../../../../../assets/svg/down.svg';
import {Box, LinearProgress, Typography} from "@mui/material";
import {ComponentProps} from "../../../../../shared/types/interfaces/component-props.interface";
import {ProductStore} from "../../../stores/product/product.store";

interface ProductsListProps extends ComponentProps {
}

@inject(ProductsStore._name, ProductStore._name)
@observer
export default class ProductsList extends React.Component<ProductsListProps> {
  private _productsStore: ProductsStore = this.props[ProductsStore._name];
  private _productStore: ProductStore = this.props[ProductStore._name];

  private _containerRef = React.createRef<HTMLDivElement>();

  @observable listHeight: number = null;
  @observable isListBeingScrolled: boolean = false;

  constructor(props) {
    super(props);
    makeObservable(this);
  }

  @action setListHeight(value: number) {
    this.listHeight = value
  }


  @action setListBeingScrolled(value: boolean) {
    this.isListBeingScrolled = value
  }

  updateListHeight() {
    const containerOffsetTop = this._containerRef.current?.offsetTop;
    const pageHeight = window.innerHeight;

    this.setListHeight(!!containerOffsetTop ? pageHeight - containerOffsetTop : 0);
  }

  handleResize = () => {
    this.updateListHeight();
  }

  componentDidUpdate(prevProps: Readonly<ProductsListProps>, prevState: Readonly<{}>, snapshot?: any) {
    this.updateListHeight();
  }

  componentDidMount() {
    this.updateListHeight();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  @computed get isNothingFound(): boolean {
    return this._productsStore.filterStore.isFiltering && !this._productsStore.products.length;
  }

  renderUnfilledTableContent(caption: string, children?: React.ReactNode) {
    return (
      <ProductListUnfilledTableContent>
        <Typography variant={'h5'} color={(theme) => theme.palette.text.secondary}>{caption}</Typography>
        {children}
      </ProductListUnfilledTableContent>
    )
  }

  handleScrollToTopClick(e) {
    e.stopPropagation();

    this._containerRef.current.scroll({top: 0, behavior: 'smooth',})
  }

  render() {
    return (
      <ProductsListContainer
        onScroll={(e: any) => this.setListBeingScrolled(e.target.scrollTop > 0)}
        ref={this._containerRef} style={{height: this.listHeight}}
      >
        {this._productsStore.isLoading
          ?
          this.renderUnfilledTableContent(
            'Loading...',
            <Box style={{'width': '200px'}}>
              <LinearProgress color={'primary'} data-loading-progress/>
            </Box>
          )
          :
          this.isNothingFound ? <Box data-nothing-found sx={{height: '100%'}}>{this.renderUnfilledTableContent('Nothing found.')}</Box>
            :
            <>
              {this._productsStore.products.map((product, index) => (
                <ProductsListItem
                  onClick={() => {
                    this._productStore.setSelectedProduct(product);
                  }}
                  isActive={this._productStore.isSelectedProduct(product.id)}
                  key={index}
                  {...product}
                />
              ))}
              <ProductListScrollToTopButtonContainer>
                <ProductListScrollToTopButton
                  isListBeingScrolled={this.isListBeingScrolled}
                  onClick={(e) => this.handleScrollToTopClick(e)}
                >
                  <ScrollToTopIcon/>
                </ProductListScrollToTopButton>
              </ProductListScrollToTopButtonContainer>
            </>
        }
      </ProductsListContainer>
    );
  }
}
