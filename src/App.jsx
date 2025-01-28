import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Registratin from "./pages/Registratin";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import Profile from "./pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registratin />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
