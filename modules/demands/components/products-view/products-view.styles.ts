import {Box, Card, styled, Typography} from "@mui/material";


export const ProductsViewContainer = styled(Card)({
  borderRadius: '4px',
  marginTop: '24px',
  backgroundColor: '#fff',
  width: '100%',
  maxWidth: '1152px',
})

export const ProductViewTableWrapper = styled('div')({
  marginTop: '8px',
  width: '100%',
  maxWidth: '1152px',
});

export const ProductsViewHeaderLabelWrapper = styled('div')({
  padding: '19px 0 16px 24px',
})

export const ProductsViewControls = styled('div')({
  padding: '33px 24px 32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '21px',
})
