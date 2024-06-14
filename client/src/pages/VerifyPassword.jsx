import { Link } from "react-router-dom";
import { LogoImg } from "../assets/logo.png";
function verifyPassword() {
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
                      <input type="email" className="form-control" disabled required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Token</label>
                      <input className="form-control"  required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">New Password</label>
                      <input className="form-control"  required maxLength={6} />
                    </div>
                    <div className="d-grid col-6 mx-auto">
                      <button type="submit" className="btn btn-primary btn-lg" >
                        Reset Password
                      </button>
                    </div>
                  </form>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <Link to="/Register" className="text-decoration-none">
                      login
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

export default verifyPassword