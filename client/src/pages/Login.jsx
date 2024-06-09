import {  useState , useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import { LogoImg } from "../assets/logo.png";
import { login } from "../Services/users";
import Notify from "../component/Alert";
import {setTokens,getToken} from "../utils/token"
function Login() {
  const navigate=useNavigate();
  const [payload,SetPayload]=useState({
    email:"",
    password:"",
  })
  const [error,SetError]=useState("login failed")
  const handlelogin=async(e)=>{
    try{
      e.preventDefault();
    const {data} =await login(payload)
  if(data?.data){
    setTokens(data.data)
    navigate("/")
  }}
  catch(e)
  {
    SetError(e)
  }
  finally{
    setTimeout(()=>{
      setTimeout("")
    },3000)
  }

  };
useEffect(()=>{
const token=getToken();
if (token) navigate("/")
},[navigate])
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#efefef" }}
      >
        <div className="flex align-items-center ">
          <div className="col-md-4 w-100">
            <div className="card shadow">
              <div className="card-body">
                <div className="row d-flex justify-content-center align-items-center">
                  <img src={LogoImg} style={{ maxWidth: "100px" }} />
                  <h2 className="text-center mt-2">Login</h2>
                  {error && <Notify msg={error}/>}
                  <form className="mb-3">
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" required  onChange={(e) => SetPayload((prev) => {
      return { ...prev, email: e.target.value };
    }) }/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" required  onChange={(e) => SetPayload((prev) => {
      return { ...prev, password: e.target.value };
    })}/>
                    </div>
                    <div className="mb-3 d-flex flex-row-reverse">
                      <Link
                        to="/ForgetPassword"
                        className="text-decoration-none"
                      >
                        Forget Password?
                      </Link>
                    </div>
                    <div className="d-grid col-6 mx-auto">
                      <button type="submit" className="btn btn-primary btn-lg" onClick={(e)=>handlelogin(e)}>
                        Login
                      </button>
                    </div>
                  </form>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <Link to="/Register" className="text-decoration-none">
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
