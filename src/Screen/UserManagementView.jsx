import React from 'react'
import { changeStatus, getUserDetails } from '../Api/Users';
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from 'react-router-dom';
import SwalAlert from '../Components/SwalAlert';
import { closeModals } from '../utils/closeModals';

// import Loader from "../components/Loader";

const UserManagementView = ({match,history}) => {
  const usequeryClient = new useQueryClient();

  const { isLoading: feedloading, data: user } = useQuery(["user", match.params.id], () =>
    getUserDetails(match.params.id),
    );
    const handleChangeStatus = useMutation(
      {
        mutationFn: (data) => changeStatus(data),
  
        onSuccess: (res) => {
          SwalAlert('success', 'SUCCESS', res?.data?.message);
  
          usequeryClient.invalidateQueries(['users'])
          history.push("/UserManagement");

        },
        onError: (err) => Error(err?.response?.data?.message),
      }
      
    );
  
  return (
    <>{feedloading ? <div className="spinner-2 "></div> :
    
    <>
    <div className="app-content content users">
    <div className="content-wrapper">
      <div className="content-body">
        {/* Basic form layout section start */}
        <section id="configuration">
          <div className="row">
            <div className="col-12">
              <div className="dash-card mt-4">
                <div className="row align-items-baseline">
                  <div className="col-md-6">
                    <h2><Link
                        to="#"
                        onClick={() => {
                          history?.goBack();
                        }}><i className="fas p-lg fa-arrow-left" /></Link> user profile
                      details</h2>
                  </div>
                  <div className="col-md-6">
                    <div className="dropdown text-end">
                      <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Profile Status: <span className="green-text semi-bold">{user?.status
                                ? "Active"
                                : "Inactive"}</span>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#" data-toggle="modal" data-target="#for-inactive">Active</a></li>
                        <li><a className="dropdown-item" href="#" data-toggle="modal" data-target="#for-inactive">Inactive</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="row my-4">
                    <div className="col-lg-12">
                      <img  src="images/user-pic.png" alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 my-2">
                      <label htmlFor className="site-label mb-0">First Name</label>
                      <input type="email" defaultValue={user?.firstName} disabled className="site-input" />
                    </div>
                    <div className="col-lg-12 my-2">
                      <label htmlFor className="site-label mb-0">Last Name</label>
                      <input type="email" defaultValue={user?.lastName} disabled className="site-input" />
                    </div>
                    <div className="col-lg-12 my-2">
                      <label htmlFor className="site-label mb-0">Email Address</label>
                      <input type="email" defaultValue={user?.email} disabled className="site-input" />
                    </div>
                    <div className="col-lg-12 my-2">
                      <label htmlFor className="site-label mb-0">Phone Number</label>
                      <input type="email" defaultValue={user?.phone} disabled className="site-input" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div></>}

  <div className="modal fade block-user modal-with-buttons" id="for-inactive" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" style={{display: 'none'}} aria-hidden="true">
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
                <p>Are You Sure You Want To Mark The User As {!user?.status
                                ? "Active"
                                : "Inactive"}?</p>
                <div className="buttons">
                  <button type="button" onClick={() =>
                                                handleChangeStatus.mutate(
                                                  user?._id,
                                                )
                                              }  className="yel-btn" data-dismiss="modal" data-toggle="modal" data-target="#for-inactive-secc">yes</button>
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

export default UserManagementView