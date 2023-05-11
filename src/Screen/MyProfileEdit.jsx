import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../Components/ImageSelector";
import { updateAdminInfoAction } from "../actions/adminActions";
import Toasty from "../utils/toast";
import { baseURL } from "../utils/api";
import axios from "axios";

const MyProfileEdit = ({ history }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");

  const [image, setimage] = useState("");
  const [is_edit, setIsEdit] = useState(false);
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    if (adminInfo) {
      setfirstName(adminInfo?.firstName);
      setlastName(adminInfo?.lastName);
      setemail(adminInfo?.email);
      setimage(adminInfo?.userImage);
    }
  }, [adminInfo]);

  const updateProfileData = async () => {
    if (firstName?.length > 0 && lastName?.length > 0) {
      try {
        setloading(true);
        const formData = new FormData();
        formData.append("user_image", image);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
    const body={firstName,
      lastName,
      email}
        await dispatch(updateAdminInfoAction(body));
        setloading(false);
      } catch (error) {
        setloading(false);
      }
    } else {
      Toasty("error", `Please fill out all the required fields!`);
      setloading(false);
    }
    setloading(false);
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
                      <h2> <Link
                        to="#"
                        onClick={() => {
                          history?.goBack();
                        }}
                      ><i className="fas p-lg fa-arrow-left" /></Link> edit profile information</h2>
                    </div>
                  </div>
                  <div className="py-4">
                    {/* <div className="row my-4">
                      <div className="col-lg-12">
                        <ImageSelector
                          setImage={setimage}
                          image={image}
                          is_edit={true}
                        />                    </div>
                    </div> */}
                    <div className="row">
                      <div className="col-md-4 form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label web-label">First Name<span className="text-red">*</span></label>
                        <input type="email" className="form-control" value={firstName}
                          onChange={(e) => {
                            setfirstName(e.target.value);
                          }} />
                      </div>
                      <div className="col-md-4 form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label web-label">Last Name<span className="text-red">*</span></label>
                        <input type="email" className="form-control" value={lastName}
                          onChange={(e) => {
                            setlastName(e.target.value);
                          }} />
                      </div>
                      <div className="col-lg-12 my-2">
                        <label htmlFor className="site-label mb-0">Email Address</label>
                        <input type="email" value={email}
                          disabled className="site-input" />
                      </div>
                      <div className="col-lg-6 my-2">
                        <div className="d-inline-block text-center">
                          {!loading ? (
                            <Link
                              to="#"
                              onClick={() => {
                                updateProfileData();
                              }}
                              className="yel-btn ml-0"
                            >
                              Save Changes
                            </Link>
                          ) : (
                            <i className="fas fa-spinner fa-pulse"></i>
                          )}
                          {/* <Link to='#' className="yel-btn2 ml-0">Cancel</Link> */}
                          <Link to='/SetNewPassword' className="yellow-a d-block mt-2">Change Password</Link>
                        </div>
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

export default MyProfileEdit