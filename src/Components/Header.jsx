import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/adminActions";
import { baseURL, imageURL } from "../utils/api";

const Header = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  // const [notifications, setnotifications] = useState([]);
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const logOutHandler = async () => {
    console.log("logOutHandler");
    dispatch(logout());
  };

  return (
    <><nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border">
      <div className="navbar-wrapper">
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item mobile-menu d-md-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs is-active" href="#"><i className="ft-menu font-large-1" /></a>
            </li>
            <li className="nav-item"> <Link to='/dashboard' className="navbar-brand" > <img className="brand-logo img-fluid" alt="stack admin logo" src="images/logo.png" /> </Link> </li>
            <li className="nav-item d-md-none"> <a className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i className="fa fa-ellipsis-v" /></a> </li>
          </ul>
        </div>
        <div className="navbar-container content">
          <div className="collapse navbar-collapse" id="navbar-mobile">
            <ul className="nav navbar-nav mr-auto float-left">
            </ul>
            <ul className="nav navbar-nav float-right">
              <li className="dropdown dropdown-notification nav-item"> <Link to='/Notifications' className="nav-link nav-link-label"  ><i className="ficon ft-bell" /> <span className="badge badge-pill badge-default badge-danger badge-default badge-up"></span>
              </Link>
                {/* <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                  <li className="scrollable-container media-list ps-container ps-theme-dark ps-active-y" data-ps-id="4583bf9a-7613-8332-d5d6-1faed7309d7d">
                    <a href="javascript:void(0)">
                      <div className="media">
                        <div className="media-left"><i className="fa grey-text fa-bell" />
                        </div>
                        <div className="media-body">
                          <p className="notification-text font-small-3 text-muted">Lorem ipsum dolor
                            sit amet, consectetuer elit.</p>
                          <small className="small-noti d-flex justify-content-between">
                            <span>30 minutes Ago</span>
                            <span>Mark as Read</span>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)">
                      <div className="media">
                        <div className="media-left"><i className="fa grey-text fa-bell" />
                        </div>
                        <div className="media-body">
                          <p className="notification-text font-small-3 text-muted">Lorem ipsum dolor
                            sit amet, consectetuer elit.</p>
                          <small className="small-noti d-flex justify-content-between">
                            <span>30 minutes Ago</span>
                            <span>Mark as Read</span>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)">
                      <div className="media">
                        <div className="media-left"><i className="fa grey-text fa-bell" />
                        </div>
                        <div className="media-body">
                          <p className="notification-text font-small-3 text-muted">Lorem ipsum dolor
                            sit amet, consectetuer elit.</p>
                          <small className="small-noti d-flex justify-content-between">
                            <span>30 minutes Ago</span>
                            <span>Mark as Read</span>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)">
                      <div className="media">
                        <div className="media-left"><i className="fa grey-text fa-bell" />
                        </div>
                        <div className="media-body">
                          <p className="notification-text font-small-3 text-muted">Lorem ipsum dolor
                            sit amet, consectetuer elit.</p>
                          <small className="small-noti d-flex justify-content-between">
                            <span>30 minutes Ago</span>
                            <span>Mark as Read</span>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)">
                      <div className="media">
                        <div className="media-left"><i className="fa grey-text fa-bell" />
                        </div>
                        <div className="media-body">
                          <p className="notification-text font-small-3 text-muted">Lorem ipsum dolor
                            sit amet, consectetuer elit.</p>
                          <small className="small-noti d-flex justify-content-between">
                            <span>30 minutes Ago</span>
                            <span>Mark as Read</span>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)">
                      <div className="media">
                        <div className="media-left"><i className="fa grey-text fa-bell" />
                        </div>
                        <div className="media-body">
                          <p className="notification-text font-small-3 text-muted">Lorem ipsum dolor
                            sit amet, consectetuer elit.</p>
                          <small className="small-noti d-flex justify-content-between">
                            <span>30 minutes Ago</span>
                            <span>Mark as Read</span>
                          </small>
                        </div>
                      </div>
                    </a>
                    <div className="ps-scrollbar-x-rail" style={{ left: '0px', bottom: '3px' }}><div className="ps-scrollbar-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps-scrollbar-y-rail" style={{ top: '0px', height: '255px', right: '0px' }}><div className="ps-scrollbar-y" tabIndex={0} style={{ top: '0px', height: '178px' }} /></div></li>
                  <li className="dropdown-menu-footer"><a className="dropdown-item ml-3 black-text" href="notifications.php">View all</a>
                  </li>
                </ul> */}
              </li>
              <li className="dropdown dropdown-user nav-item"> <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                <span className="avatar avatar-online"> <img src={
                  adminInfo?.userImage && adminInfo?.userImage !== null
                    ? `${imageURL}${adminInfo?.userImage}`
                    : "images/avatar.jpg"
                } alt="avatar" />
                </span> <span className="user-name">                        {adminInfo?.firstName + " " + adminInfo?.lastName}
                </span> </a>
                <div className="dropdown-menu dropdown-menu-right"><Link className="dropdown-item" to='/MyProfile'><i className="fa fa-user-circle" />Profile </Link>
                  <a className="dropdown-item" href="login.php" data-toggle="modal" data-target="#logout-msg"><i className="fa fa-power-off" /> Logout</a>
                </div>
              </li>
              <li className="nav-item d-none d-md-block"><a className="nav-link nav-menu-main menu-toggle hidden-xs is-active" href="#"><i className="ft-menu" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>


      <div className="modal fade block-user modal-with-buttons" id="logout-msg" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" style={{ display: 'none' }} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="forget-pass">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
              <div className="modal-body">
                <form action="login.php">
                  <div className="row">
                    <div className="col-12 text-center">
                      <img src="images/info-standard.png" className="img-fluid" alt="" />
                      <h1>System message</h1>
                      <p>Are You Sure You Want To Logout?</p>
                      <div className="buttons">
                        <button type="submit" onClick={logOutHandler}
                          className="yel-btn">yes</button>
                        <button type="button" className="gray-btn" data-dismiss="modal" aria-label="close">no</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header