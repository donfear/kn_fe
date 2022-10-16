import {createTheme, ThemeOptions, alpha, checkboxClasses} from "@mui/material";
import {SimplePaletteColorOptions} from "@mui/material/styles/createPalette";

const typography: ThemeOptions['typography'] = {
  body1: {
    lineHeight: 'unset'
  },
  fontFamily: 'Roboto,Arial',
  subtitle1: {
    fontSize: '14px',
    lineHeight: '17px',
  },
  h6: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 500,
  },
  h5: {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: 500,
  },
  caption: {
    fontSize: '18px',
    lineHeight: '21px',
  },
  subtitle2: {
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: 500,
  },
};

const palette: ThemeOptions['palette'] & {primary: SimplePaletteColorOptions} = {
  background: {
    default: '#F5F6FA',
  },
  divider: '#EBEBEB',
  text: {
    primary: '#3C4858',
    secondary: '#8492A6',
    disabled: '#DADEE4',
  },
  primary: {
    main: '#12B8FF'
  }
}

export const theme = createTheme({
  typography,
  palette,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.08)'
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            width: '21px',
            height: '21px',
          }
       }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(palette.primary.main, 0.15),
          borderRadius: '4px',
          height: 'unset',
          marginBottom: '8px',
          marginRight: '8px',
        },
        label: {
          color: palette.primary.main,
          padding: '5px 10px 4px 9px',
          ...typography.subtitle2
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& input': {
              padding: '8px 0',
            },
            '& fieldset': {
              borderColor: '#F0F2F4',
              borderRadius: '2px',
            },
            '&:hover fieldset': {
              borderColor: '#F0F2F4',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#F0F2F4',
              borderWidth: '1px',
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            width: '16px',
            height: '16px',
          }
        }
      }
    }
  }
});

