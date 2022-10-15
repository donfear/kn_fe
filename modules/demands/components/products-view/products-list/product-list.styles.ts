import {styled} from "@mui/material";

export const ProductsListContainer = styled('div')({
  overflowY: 'scroll',
  paddingBottom: '8px',
  position: 'relative'
})

export const ProductListScrollToTopButtonContainer = styled<any>('div')(({isListBeingScrolled}) => ({
  display: 'flex',
  justifyContent: 'center'
}))
export const ProductListScrollToTopButton = styled<any>('div')(({isListBeingScrolled}) => ({
  opacity: isListBeingScrolled ? '1' : '0',
  'position': 'fixed',
  bottom: '14px',
  width: '65px',
  height: '65px',
  cursor: 'pointer',
  transition: 'opacity 0.15s ease'
}))

export const ProductListUnfilledTableContent = styled('div')({
  paddingBottom: '64px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  gap: '6px'
})
