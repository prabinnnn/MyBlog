import { Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserNavbar from "./UserNavbar"
const UserLayouts = () => {
  return (
    <div>
    <UserNavbar/>
 <Outlet/>
    <UserFooter/>
    </div>
  )
}

export default UserLayouts