import { Outlet, useNavigate } from "react-router-dom"
import AdminNavbar from "./AdminNavbar"
import { getToken } from "../utils/token"
import { useEffect } from "react"
const AdminLayouts = () => {
  const navigate=useNavigate();
  useEffect(()=>{
  const token =getToken();
  if(!token) navigate('/login')
  },[navigate])
  return (
    <div>
      <main className="d-flex vh-100">
      <AdminNavbar/>
      <Outlet/>
      </main>
    </div>
  )
}

export default AdminLayouts