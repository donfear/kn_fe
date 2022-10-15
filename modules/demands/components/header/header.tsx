import React from 'react';
import {HeaderContainer} from './header.styles';
import {Typography, } from "@mui/material";
import {withTheme, WithThemeProps} from "../../../../decorators/with-theme.decorator";

interface HeaderProps extends WithThemeProps {

}

@withTheme()
export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <HeaderContainer>
        <Typography variant={'caption'}>
          Create Demand
        </Typography>
        <Typography variant={'subtitle1'} marginTop={'6px'} color={this.props.theme.palette.text.secondary}>
          Search the product you need here. Use tags to find any alternative.
        </Typography>

      </HeaderContainer>
    )
  }
}
