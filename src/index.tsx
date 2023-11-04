import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import {createTheme, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createTheme({
    typography: {
        fontSize: 16,
        h1: {
            fontFamily: "'Bubblegum Sans', cursive",
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    border: "12px solid #00abd4",
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                title: {
                    fontSize: "2.5rem",
                    fontFamily: "'Amatic SC', cursive",
                    fontWeight: "bold",
                }
            }
        }
    },
});
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </React.StrictMode>
);
