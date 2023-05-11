import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { baseURL } from '../utils/api';
import axios from 'axios';
import Toasty from '../utils/toast';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const VerificaitonCode = ({match,history}) => {
  const [loading, setloading] = useState(false);

  const [code, setcode] = useState();
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const onSubmitHandler = async () => {
    try {
      setloading(true);
      console.log("body", code, match?.params?.email);
      const body = { code, email: match?.params?.email };
      console.log("TEST");
      // try {
      const res = await axios.post(`${baseURL}/user/adminverifyRecoverCode`, body);
      setloading(false);
      console.log("res", res);
      history?.push({
        pathname: "/NewPassword",
        state: { code: code, email: match?.params?.email }
      });
    } catch (error) {
      setloading(false);

      console.log("error", error?.response);
      // alert(error?.response?.data?.message)
      Toasty("error", `🦄 ${error?.response?.data?.message}!`);
    }
  };

  const resentCodeHandler = async (e) => {
    e.preventDefault();
    const useremail = match?.params?.email;
    const body = { email: useremail };

    try {
      const res = await axios.post(`${baseURL}/user/adminRecoverPassword`, body);
      console.log("res", res);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "SUCCESS",
          text: "Verification Code Sent to your mail",
          background: "#45b6fe",
          color: "white",
      
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.log(error.response);
      Toasty("error", `🦄 Invalid Email!`);
    }
  };

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
                    <input type="number" value={code} onChange={(e)=>{
                      setcode(e.target.value)
                    }} className="form-control" placeholder="Enter verification code" />
                  </div>
                </div>
                <div className="text-right">
                <Link
                        to="#"
                        onClick={resentCodeHandler}  className="forgot">
                    Resend Code</Link>
                </div>
                <div className="text-center">
                {!loading ? (<button type="button"  onClick={() =>
                            code?.length > 0
                              ? onSubmitHandler()
                              : Toasty(
                                "error",
                                `Please fill out all the required fields`
                              )
                          } className="yel-btn"> Continue </button>) : (
                            <i className="fas fa-spinner fa-pulse"></i>
                          )}
                  <div className="back-login">
                    <small>Back To <Link to='/'>Login</Link></small>
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