import React, { useState } from 'react'
import { adminResetPasswordAction } from '../actions/adminActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Toasty from '../utils/toast';

const NewPassword = (props) => {
  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);
  const [password, setpassword] = useState();
  const [confirm_password, setconfirm_password] = useState();
  const [showicon, setshowicon] = useState(true);
  const [showicon2, setshowicon2] = useState(true);

  const onSubmitHandler = async () => {
    setloading(true);
    console.log(
      "body",
      password,
      confirm_password,
      props?.location?.state?.code,
      props?.location?.state?.email
    );

    await dispatch(
      adminResetPasswordAction(
        password,
        confirm_password,
        props?.location?.state?.code,
        props?.location?.state?.email
      )
    );
    setloading(false);
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
                <h6>Type in your new Password</h6>
                <form action="dashboard.php">
                  <div className="row">
                    <div className="col-12 form-group position-relative">
                      <label htmlFor="exampleInputEmail1" className="form-label web-label">Password<span className="text-red">*</span></label>
                      <input type={showicon ? "password" : "text"} value={password}
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }} className="form-control" placeholder="Enter Password" />
                      <button type="button" className="view-btn position-absolute"><i onClick={() => setshowicon(!showicon)}
                        className={
                          showicon
                            ? "fa fa-eye-slash"
                            : "fa fa-eye"
                        } /></button>
                    </div>
                    <div className="col-12 form-group position-relative">
                      <label htmlFor="exampleInputEmail1" className="form-label web-label">Confirm Password<span className="text-red">*</span></label>
                      <input type={showicon2 ? "password" : "text"} value={confirm_password}
                        onChange={(e) => {
                          setconfirm_password(e.target.value);
                        }} className="form-control" placeholder="Confirm Password" />
                      <button type="button" className="view-btn position-absolute"><i onClick={() => setshowicon2(!showicon2)}
                        className={
                          showicon2
                            ? "fa fa-eye-slash"
                            : "fa fa-eye"
                        } /></button>
                    </div>
                  </div>
                  <div className="text-center">
                    {!loading ? (
                      <button onClick={() =>
                        confirm_password?.length > 0 && password?.length > 0
                          ? onSubmitHandler()
                          : Toasty(
                            "error",
                            `Please fill out all the required fields`
                          )
                      } type="button" className="yel-btn" data-toggle="modal" data-target="#succ-msg">Update</button>) : (
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

export default NewPassword