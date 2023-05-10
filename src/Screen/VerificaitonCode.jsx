import React from 'react'

const VerificaitonCode = () => {
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
              <h6>An email has been sent to you with a verification code.</h6>
              <form action="new-password.php">
                <div className="row">
                  <div className="col-12 form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label web-label">Verification Code<span className="text-red">*</span></label>
                    <input type="email" className="form-control" placeholder="Enter verification code" />
                  </div>
                </div>
                <div className="text-right">
                  <a href="#" className="forgot">
                    Resend Code</a>
                </div>
                <div className="text-center">
                  <button type="submit" className="yel-btn"> Continue </button>
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

export default VerificaitonCode