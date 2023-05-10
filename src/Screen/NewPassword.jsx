import React from 'react'

const NewPassword = () => {
  return (
    <><section className="login-main">
    <div className="container">
      <div className="login-inner">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="left"> <img src="images/login.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12 ">
            <div className="right">
              <img src="images/login-login-logo.png" className="img-fluid" alt="" />
              <h1>Forgot Password</h1>
              <h6>Type in your new Password</h6>
              <form action="dashboard.php">
                <div className="row">
                  <div className="col-12 form-group position-relative">
                    <label htmlFor="exampleInputEmail1" className="form-label web-label">Password<span className="text-red">*</span></label>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                    <button type="button" className="view-btn position-absolute"><i className="fa fa-eye-slash" /></button>
                  </div>
                  <div className="col-12 form-group position-relative">
                    <label htmlFor="exampleInputEmail1" className="form-label web-label">Confirm Password<span className="text-red">*</span></label>
                    <input type="password" className="form-control" placeholder="Confirm Password" />
                    <button type="button" className="view-btn position-absolute"><i className="fa fa-eye-slash" /></button>
                  </div>
                </div>
                <div className="text-center">
                  <button type="button" className="yel-btn" data-toggle="modal" data-target="#succ-msg">Update</button>
                  <div className="back-login">
                    <small>Back To <a href="login.php">Login</a></small>
                  </div>
                </div>
              </form>
              {/*login modal start here*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default NewPassword