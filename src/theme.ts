import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0077B6",
    },
    secondary: {
      main: "#00B4D8",
    },
    background: {
      default: "#F1FAFF",
    },
    text: {
      primary: "#023047",
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Poppins', sans-serif`,
  },
});

export default theme;
