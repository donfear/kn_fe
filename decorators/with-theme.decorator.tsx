import React from "react";
import {Theme, useTheme} from "@mui/material";

export interface WithThemeProps {
  theme?: Theme
}

export function withTheme(): Function {
  return function (OriginalComponent) {

    function withThemeWrapper(originalProps) {
      const theme = useTheme();

      return <OriginalComponent {...originalProps} theme={theme}/>
    }

    return withThemeWrapper;

  }

}
