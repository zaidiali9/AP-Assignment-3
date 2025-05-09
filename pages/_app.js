// pages/_app.js
import { ThemeProviderWrapper } from "../contexts/ThemeContext";
import { CssBaseline } from "@mui/material";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProviderWrapper>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProviderWrapper>
  );
}
