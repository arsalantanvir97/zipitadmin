import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminverfyadnresetpasword } from "../actions/adminActions";
import Toasty from "../utils/toast";

const SetNewPassword = ({ history }) => {
  const dispatch = useDispatch();
  const [existingpassword, setexistingpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [showicon, setshowicon] = useState(true);
  const [showicon2, setshowicon2] = useState(true);
  const [showicon3, setshowicon3] = useState(true);
  const [loading, setloading] = useState(false);

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const submitHandler = async () => {
    console.log("submitHandler");
    console.log(
      "submitHandlerreqbody",
      existingpassword,
      newpassword,
      confirm_password
    );
    try {
      setloading(true);
      await dispatch(
        adminverfyadnresetpasword(
          existingpassword,
          newpassword,
          confirm_password,
          adminInfo?.email,
          history
        )
      );
      setloading(false);
    } catch (error) {
      setloading(false);
    }
    setloading(false);

    setexistingpassword("");
    setnewpassword("");
    setconfirm_password("");
  };
  return (
    <><div className="app-content content users">
    <div className="content-wrapper">
      <div className="content-body">
        {/* Basic form layout section start */}
        <section id="configuration">
          <div className="row">
            <div className="col-12">
              <div className="dash-card mt-4">
                <div className="row align-items-baseline">
                  <div className="col-md-12">
                    <h2><a href="my-profile.php"><i className="fas p-lg fa-arrow-left" /></a> Set New
                      Password</h2>
                  </div>
                </div>
                <div className="py-4">
                  <div className="row my-4">
                    <div className="col-lg-12">
                      <img src="images/user-pic.png" alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 form-group position-relative">
                      <label htmlFor="exampleInputEmail1" className="form-label web-label">Current
                        Password<span className="text-red">*</span></label>
                      <input type="password" className="form-control" placeholder="Enter your Current Password" />
                      <button type="button" className="view-btn new-pass-eye position-absolute"><i className="fa fa-eye-slash" /></button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 form-group position-relative">
                      <label htmlFor="exampleInputEmail1" className="form-label web-label">New Password<span className="text-red">*</span></label>
                      <input type="password" className="form-control" placeholder="Enter your New Password" />
                      <button type="button" className="view-btn new-pass-eye position-absolute"><i className="fa fa-eye-slash" /></button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 form-group position-relative">
                      <label htmlFor="exampleInputEmail1" className="form-label web-label">Confirm
                        Password<span className="text-red">*</span></label>
                      <input type="password" className="form-control" placeholder="Re-Type Password" />
                      <button type="button" className="view-btn new-pass-eye position-absolute"><i className="fa fa-eye-slash" /></button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 my-2">
                      <button type="button" className="yel-btn ml-0" data-toggle="modal" data-target="#succ-msg">Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  </>
  )
}

export default SetNewPassword