function Login() {
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
                  <img
                    src="https://previews.123rf.com/images/mrgao/mrgao1502/mrgao150200011/36963437-red-blog-app-icon-illustration-on-white-background.jpg"
                    alt="Blog Icon"
                    style={{ width: "75px" }}
                  />
                  <h2 className="text-center mt-2">Login</h2>
                  <form className="mb-3">
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="mb-3 d-flex flex-row-reverse">
                      <a
                        href="/ForgetPassword"
                        className="text-decoration-none"
                      >
                        Forget Password?
                      </a>
                    </div>
                    <div className="d-grid col-6 mx-auto">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Login
                      </button>
                    </div>
                  </form>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <a href="/Register" className="text-decoration-none">
                      Register
                    </a>
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
