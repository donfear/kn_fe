import {Box, styled} from "@mui/material";

export const TabsContainer = styled(Box)({
  marginTop: '36px',
  position: 'relative'
})


export const TabsUnderLine = styled(Box)({
  position: 'absolute',
  bottom: 0,
  height: '2px',
  width: '100%',
  backgroundColor: '#8492A626',
  zIndex: -1,
})
