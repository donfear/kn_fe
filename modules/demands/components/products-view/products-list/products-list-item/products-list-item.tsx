import React from "react";
import {
    ProductListItemContainer,
    ProductListItemSeeAllChip,
    ProductListItemSeeAllToolTipContent,
    ProductListItemSeeAllToolTip,
    ProductListItemSeeAllToolTipChip
} from "./product-list-item.styles";
import {Box, Chip, Typography} from "@mui/material";
import {IProduct} from "../../../../types/interfaces/product.interface";
import {theme} from "../../../../../../theme/theme";

interface ProductsTableItemProps extends IProduct {
    onClick: () => void,
    isActive: boolean
}

export class ProductsListItem extends React.Component<ProductsTableItemProps> {
    render() {
        const chipsComponents = this.props.tags.map((tag, index) => <Chip sx={{marginBottom: 'unset', marginTop: '8px'}} label={tag} key={index}/>)
        return (
            <ProductListItemContainer
                data-product-list-item={this.props.id}
                onClick={this.props.onClick}
                sx={{
                    border: '1px solid transparent',
                    ...this.props.isActive && {
                        border: '1px solid ' + theme.palette.primary.main
                    },
                    ...!this.props.tags.length && {
                        paddingBottom: '14px',
                    }
                }}
            >
                <Box display={'flex'} justifyContent={'space-between'}>

                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography variant={'h5'}>
                            {this.props.productName}
                        </Typography>

                        <Box>
                            {chipsComponents.filter((_, index) => index < 3)}
                            {this.props.tags.length >= 3 && (
                                <ProductListItemSeeAllToolTip
                                    placement={'top'}
                                    title={(
                                        <ProductListItemSeeAllToolTipContent>
                                            {
                                                chipsComponents.map((chipComponent, index) => (
                                                    <ProductListItemSeeAllToolTipChip
                                                        key={index}
                                                    >
                                                        {chipComponent}
                                                    </ProductListItemSeeAllToolTipChip>
                                                ))
                                            }
                                        </ProductListItemSeeAllToolTipContent>
                                    )}
                                >
                                    <ProductListItemSeeAllChip
                                        onClick={e => {
                                            e.preventDefault();
                                            e.stopPropagation()
                                        }}
                                        sx={{marginBottom: 'unset', marginTop: '8px'}}
                                        label={`See all (${this.props.tags.length})`}
                                    />
                                </ProductListItemSeeAllToolTip>
                            )}
                        </Box>
                    </Box>

                    <Box display={'flex'} alignItems={'center'}>
                        <Typography variant={'subtitle1'} color={'#8492A6'}>
                            {this.props.category}
                        </Typography>
                    </Box>
                </Box>
            </ProductListItemContainer>
        )

    }
}
