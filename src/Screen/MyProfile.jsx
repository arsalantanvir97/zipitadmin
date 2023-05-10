import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { baseURL, imageURL } from "../utils/api";

const MyProfile = () => {
    const dispatch = useDispatch();
    // const [notifications, setnotifications] = useState([]);
    const adminLogin = useSelector((state) => state.adminLogin);
    const { adminInfo } = adminLogin;

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
                                            <h2>my profile</h2>
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <div className="row my-4">
                                            <div className="col-lg-12">
                                                <img src={
                                                    adminInfo?.userImage && adminInfo?.userImage !== null
                                                        ? `${imageURL}${adminInfo?.userImage}`
                                                        : "images/user-pic.png"
                                                } alt="" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 my-2">
                                                <label htmlFor className="site-label mb-0">First Name</label>
                                                <input type="email" defaultValue={adminInfo?.firstName} disabled className="site-input" />
                                            </div>
                                            <div className="col-lg-12 my-2">
                                                <label htmlFor className="site-label mb-0">Last Name</label>
                                                <input type="email" defaultValue={adminInfo?.lastName} disabled className="site-input" />
                                            </div>
                                            <div className="col-lg-12 my-2">
                                                <label htmlFor className="site-label mb-0">Email Address</label>
                                                <input type="email" defaultValue={adminInfo?.email} disabled className="site-input" />
                                            </div>
                                            <div className="col-lg-6 my-2">
                                                <div className="d-inline-block text-center">
                                                    <Link to='/MyProfileEdit' className="yel-btn ml-0">Edit Profile Information</Link>
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

export default MyProfile