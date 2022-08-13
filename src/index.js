import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { store } from "./store";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const Theme = createTheme({
  typography: {
    fontFamily: "SF Pro Rounded",
  },
});
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
