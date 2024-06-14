import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Homepage from "../src/pages/Homepage"
import ForgetPassword from "./pages/ForgetPassword";
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-password" element={<verifyPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
