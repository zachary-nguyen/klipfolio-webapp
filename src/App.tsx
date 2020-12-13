import React from 'react';
import './App.css';
import Routes from "./routes/Routes";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

/**
 * Set theme colors for application
 * Values from https://www.klipfolio.com/guidelines/klipfolio-icons
 */
export const klipfolioTheme = createMuiTheme({
    palette: {
        common: { black: "#000", white: "#fff" },
        background: { paper: "#fff", default: "#fafafa" },
        primary: {
            light: "#dfebfb",
            main: "#5290e9",
            dark: "#5290e9",
            contrastText: "#fff",
        },
        secondary: {
            light: "#fae0e2",
            main: "#ee3524",
            dark: "#000",
            contrastText: "#fff",
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff",
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
        },
    },
});

function App() {
  return (
      <MuiThemeProvider theme={klipfolioTheme}>
        <div className="App">
          <Routes/>
        </div>
      </MuiThemeProvider>
  );
}

export default App;
