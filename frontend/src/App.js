import { CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme} from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes,Link } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./components/Sidebar";



function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/> 
          <Routes>
            
            <Route >
              <Route path="login" element={<Link to="/dashboard">login page</Link>}>
              </Route>
              <Route element={<Sidebar/> }>
              <Route path="" element={<Navigate to="/home" replace/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/dashboard1" element={<p>hello<br/> hjhjhj <br/></p>}/>
              </Route>
             
              
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
