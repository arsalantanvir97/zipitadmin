import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    adminLoginAction,
    adminResetPasswordAction
} from "../actions/adminActions";
import Swal from "sweetalert2";
import api from "../utils/api";
import Toasty from "../utils/toast";

import "react-toastify/dist/ReactToastify.css";
import { validateEmail } from "../utils/ValidateEmail";

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [code, setcode] = useState();
    const [confirm_password, setconfirm_password] = useState();
    const [new_password, setnew_password] = useState();
    const [showicon, setshowicon] = useState(true);
    const [showicon2, setshowicon2] = useState(true);
    const [showicon3, setshowicon3] = useState(true);
    const [loading, setloading] = useState(false);

    const [forgotpasswordModal, setforgotpasswordModal] = useState(0);

    const adminLogin = useSelector((state) => state.adminLogin);
    const { adminInfo } = adminLogin;
    const submitHandler = async () => {
        const emailvalidation = validateEmail(email);
        console.log("emmmm", emailvalidation);
        console.log("addEmployeeHandler");
        if (emailvalidation == true) {
            try {
                setloading(true);

                console.log("submitHandler");
                await dispatch(adminLoginAction(email, password, history));
                setemail("");
                setpassword("");
                setloading(false);
            } catch (error) {
                setloading(false);
            }
            setloading(false);
        } else {
            Toasty("error", `Please enter a valid email`);
        }
        setloading(false);
    };

    useEffect(() => {
        if (adminInfo) {
            history.replace("/dashboard");
        }
    }, [adminInfo]);

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
                                <h1>Login</h1>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                }}>
                                    <div className="row">
                                        <div className="col-12 form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label web-label">Email<span className="text-red">*</span></label>
                                            <input type="email" value={email}
                                                onChange={(e) => {
                                                    setemail(e.target.value);
                                                }} className="form-control" placeholder="Enter Email Address" />
                                        </div>
                                        <div className="col-12 form-group position-relative">
                                            <label htmlFor="exampleInputEmail1" className="form-label web-label">Password<span className="text-red">*</span></label>
                                            <input type={showicon ? "password" : "text"} value={password}
                                                onChange={(e) => {
                                                    setpassword(e.target.value);
                                                }}
                                                className="form-control" placeholder="Enter Password" />
                                            <button type="button" className="view-btn position-absolute"><i onClick={() => setshowicon(!showicon)}
                                                className={
                                                    showicon
                                                        ? "fa fa-eye-slash"
                                                        : "fa fa-eye"
                                                } /></button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Link to='/ForgotPassword' className="forgot">
                                            Forgot Password?</Link>
                                    </div>
                                    <div className="text-center">
                                        {!loading ? (<button type="button" onClick={() =>
                                            email?.length > 0 && password?.length > 0
                                                ? submitHandler()
                                                : Toasty(
                                                    "error",
                                                    `Please fill out all the required fields!`
                                                )
                                        } className="yel-btn"> login </button>) : (
                                            <i className="fas fa-spinner fa-pulse"></i>
                                        )}
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

export default Login