import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext();

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    background: {
      default: mode === "dark" ? "#0a0a0a" : "#ffffff",
      paper: mode === "dark" ? "#0a0a0a" : "#ffffff",
    },
    text: {
      primary: mode === "dark" ? "#ededed" : "#171717",
    },
  },
});

export function ThemeProviderWrapper({ children }) {
  const [mode, setMode] = useState("light");

  
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") setMode(saved);
  }, []);

 
  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
    
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeMode() {
  return useContext(ThemeContext);
}
