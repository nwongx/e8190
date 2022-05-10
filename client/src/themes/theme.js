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
    },
    h5: {
      fontSize: "1.625rem",
      fontWeight: "bold",
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
        paddingLeft: 4,
        fontSize: "0.875rem"
      },
      underline: {
        "&:before": {
          borderBottom: "1px solid #D5DFEE"
        },
      }
    },
    MuiInputLabel: {
      root: {
        fontSize: "0.875rem",
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
  },
  otherUserBubble: {
    background: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
  },
  senderBubble: {
    background: '#F4F6FA'
  },
  bubble: {
    header: {
      fontSize: 11,
      color: '#BECCE2',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    multiImgAspectRatio: { aspectRatio: '16/12' },
    imgAspectRatio: { aspectRatio: '1' },
    imgTextAspectRatio: { aspectRatio: '8/7' },
    imgContainer: { width: 135 },
    text: {
      fontSize: 14,
      letterSpacing: -0.2,
      padding: 8,
      fontWeight: 'bold',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '115px 115px',
      columnGap: 5,
      rowGap: 5
    }
  },
});
