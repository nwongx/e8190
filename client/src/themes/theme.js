import { createMuiTheme } from "@material-ui/core";

const primaryMainColor = "#3A8DFF";
const secondaryMainColor = "#B0B0B0";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
        paddingLeft: 4
      },
      underline: {
        "&:before": {
          borderBottom: "1px solid #D5DFEE"
        },
      }
    },
    MuiInputLabel: {
      root: {
        color: secondaryMainColor,
        paddingLeft: 4,
        "&.Mui-focused": {
          color: secondaryMainColor
        }
      },
    },
    MuiFormLabel: {
      asterisk: {
        display: "none",
      }
    }
  },
  palette: {
    primary: { main: primaryMainColor },
    secondary: { main: secondaryMainColor }
  }
});
