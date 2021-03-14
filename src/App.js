import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Home from "./Home";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3ea6ff",
      },
      background: {
        default: darkMode ? "#232323" : "#ffffff",
        dark: darkMode ? "#181818" : "#f4f6f8",
        paper: darkMode ? "#232323" : "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}
export default App;
