import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Weather from "./Weather";
import Logout from "./pages/Logout";


function App() {
  return (
    <BrowserRouter>
      <Layout />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/weather-report" element={<Weather />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;