import React from "react";
import { createRoot } from "react-dom/client";
import routers from "./routes";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import ThemeCustomization from './themes';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./global.css";

const muiTheme = createTheme();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeCustomization>
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <RouterProvider router={routers} />
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  </ThemeCustomization>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
