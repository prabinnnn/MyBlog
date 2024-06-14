import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Homepage from "../src/pages/Homepage"
import ForgetPassword from "./pages/ForgetPassword";
import UserLayouts from "./layouts/UserLayouts";
import AdminLayouts from "./layouts/AdminLayouts"
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./pages/BlogsDetails";
import Blogslist from "./pages/admin/blogs/list";
import Userlist from "./pages/admin/users/list";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-password" element={<verifyPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<UserLayouts/>}>
        <Route index element={<Homepage/>} />
        <Route path="about" element={<About/>} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="blogs/:id" element={<BlogsDetails/>} />
        <Route path="contact" element={<Contact/>} />
        </Route>
        <Route path="/admin" element={<AdminLayouts/>}>
        <Route index element={<Blogslist/>}/>
        <Route path="blogs" element={<Blogslist/>} />
        <Route path="users" element={<Userlist/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
