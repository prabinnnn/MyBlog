import { Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserNavbar from "./UserNavbar"
const UserLayouts = () => {
  return (
    <div>
    <UserNavbar/>
    <main className="container-fluid" style={{height:"405px"}}>
    <Outlet/>
    </main>
    <UserFooter/>
    </div>
  )
}

export default UserLayouts