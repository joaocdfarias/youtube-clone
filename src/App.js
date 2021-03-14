import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Home from "./Home";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3f51b5",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
export default App;
