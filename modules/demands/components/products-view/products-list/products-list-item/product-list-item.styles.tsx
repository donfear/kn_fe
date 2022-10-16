import {alpha, Card, Chip, styled, Tooltip, TooltipProps} from "@mui/material";

export const ProductListItemContainer = styled(Card)(() => ({
  borderRadius: '4px',
  marginTop: '8px',
  backgroundColor: '#fff',
  width: '100%',

  padding: '12.5px 31px 12.5px 24px',
  cursor: 'pointer',
}));

export const ProductListItemSeeAllChip = styled(Chip)(({theme}) => ({
  ':hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  }
}))


const StyledTooltip = ({className, ...props}: TooltipProps) => (
  <Tooltip {...props} classes={{tooltip: className}}/>
);

export const ProductListItemSeeAllToolTip = styled(StyledTooltip)(({theme}) => ({
  backgroundColor: alpha(theme.palette.background.default, 0.85),
}));

export const ProductListItemSeeAllToolTipContent = styled('div')({
  padding: '0 4px 4px',
  display: 'flex',
  flexWrap: 'wrap',
})
export const ProductListItemSeeAllToolTipChip = styled('div')({
  margin: '4px',
})
