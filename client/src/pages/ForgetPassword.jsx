import { Link } from "react-router-dom";
import { LogoImg } from "../assets/logo.png";
function ForgetPassword() {
  return (
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
                  <h2 className="text-center mt-2">Forget Password</h2>
                  <form className="mb-3">
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" required />
                      <div  className="form-text">
                      you wil recieve 6 digit in ur email
                      </div>
                    </div>
                    <div className="d-grid col-6 mx-auto">
                      <button type="submit" className="btn btn-primary btn-lg" >
                        Generate Token
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
  )
}

export default ForgetPassword