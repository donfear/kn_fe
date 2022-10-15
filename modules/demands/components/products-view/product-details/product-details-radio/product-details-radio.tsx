import {Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import React from "react";
import {IProduct} from "../../../../types/interfaces/product.interface";

export function ProductDetailsRadio(product: IProduct) {
  // TODO Radio buttons not connected, waiting for backend */
  const getMockOptionInfo = (index: number) => {
    if (!index) {
      return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. '
  }

  return (
    <FormControl>
      <RadioGroup
        defaultValue={1}
        name="radio-buttons-group"
      >
        {[product.option1, product.option2].map((option, index) => (
          <Box key={index} sx={{...!!index && {marginTop: '32px'}}}>
            <FormControlLabel
              value={index}
              control={<Radio size={'small'}/>}
              label={<Typography variant={'h5'} color={(theme) => theme.palette.text.secondary}>{option}</Typography>}
            />
            <Typography sx={{fontSize: '14px', lineHeight: '24px', marginTop: '6px',}} color={(theme) => theme.palette.text.primary}>
              {getMockOptionInfo(index)}
            </Typography>
          </Box>
        ))}
      </RadioGroup>
    </FormControl>
  )
}
