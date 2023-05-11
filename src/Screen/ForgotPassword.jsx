import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { baseURL } from '../utils/api';
import axios from 'axios';
import Toasty from '../utils/toast';
import { validateEmail } from '../utils/ValidateEmail';
import { Link } from 'react-router-dom';

const ForgotPassword = ({ history }) => {
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);

  const submitHandler = async () => {
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      const body = { email };
      setloading(true);

      console.log("TEST");
      try {
        const res = await axios.post(`${baseURL}/user/adminRecoverPassword`, body);
        setloading(false);

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
          history.push({
            pathname: `/VerificaitonCode/${email}`
          });
        }
      } catch (error) {
        setloading(false);

        console.log("IN HERE");
        console.log(error?.response?.data);
        Toasty("error", `🦄 Invalid Email!`);
      }
    } else {
      setloading(false);

      Toasty("error", `Please enter a valid email`);
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
                <h6>An email has been sent to you with a</h6>
                <form action="verification-code.php">
                  <div className="row">
                    <div className="col-12 form-group">
                      <label htmlFor="exampleInputEmail1" className="form-label web-label">Email Address<span className="text-red">*</span></label>
                      <input type="email" value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }} className="form-control" placeholder="Enter Email Address" />
                    </div>
                  </div>
                  <div className="text-center">
                    {!loading ? (<button type="button" onClick={() =>
                      email?.length > 0
                        ? submitHandler()
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

export default ForgotPassword