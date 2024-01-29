import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { themeSettings } from "./theme";
import Dashboard from "./scenes/dashboard";
//import Login from "./scenes/authentication/login";
import Layout from "./scenes/layout";

function App() {
  const mode = useSelector((state) => state.global.mode);
  //const isAuthenticated = useSelector((state) => state.global.isAuthenticated);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* {!isAuthenticated ? (
              <Route path="/" element={<Login />} />
            ) : ( */}
              <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            {/* )} */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
