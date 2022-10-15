import {alpha, Card, styled} from "@mui/material";

export const productDetailsWidth: number = 320;
export const productDetailsMarginLeft: number = 16;

export const ProductsDetailsContainer = styled(Card)({
  borderRadius: 0,
  marginTop: '24px',
  backgroundColor: '#fff',
  marginLeft: productDetailsMarginLeft + 'px',
  width: productDetailsWidth + 'px',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
})

export const ProductsDetailsContent = styled('div')({
  padding: '42px 24px 21px',
  overflow: 'scroll'
})

export const ProductDetailsManufacturerButton = styled('div')(({theme}) => ({
  cursor: 'pointer',
  background: theme.palette.primary.main,
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  borderRadius: '2px',
  padding: '8px 16px',
  display: 'inline-block',
  color: '#fff',
  ':hover': {
    background: alpha(theme.palette.primary.main, 0.9)
  }
}));
