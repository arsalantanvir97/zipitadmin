import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Toasty from "../utils/toast";
import { addPackages } from '../Api/Packages';
import { useMutation, useQueryClient } from "react-query";
import SwalAlert from "../Components/SwalAlert";
// import Loader from "../components/Loader";

const AddPackage = ({ history }) => {
  const usequeryClient = new useQueryClient();
  const [packagename, setpackagename] = useState("");
  const [amount, setamount] = useState("");
  const [details, setdetails] = useState("");
  const [duration, setduration] = useState("");

  const { mutate: addPackagess, isLoading: addTaxLoading } = useMutation((data) => addPackages(data), {
    retry: false,
    onSuccess: (res) => {
      SwalAlert('success', 'SUCCESS', 'Package Added Successfully');
      usequeryClient.invalidateQueries(['packages'])

      history.push("/SubscriptionManagment");
    },
    onError: (err) => Error(err?.response?.data?.message),
  });
  const addPackHandler = async () => {
    const body = { packagename,
      amount:Number(amount),
      details,
      duration:Number(duration) }
    addPackagess(body)
  };
  return (
    <div><div className="app-content content users">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="row">
              <div className="col-12">
                <div className="dash-card mt-4">
                  <div className="row align-items-baseline">
                    <div className="col-md-12">
                      <h2><a href="subscription-management.php"><i className="fas p-lg fa-arrow-left" /></a>
                        Add New Package</h2>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="row">
                      <div className="col-md-4 form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label web-label">Package Name<span className="text-red">*</span></label>
                        <input type="text" value={packagename} onChange={(e) => { setpackagename(e.target.value) }} className="form-control" placeholder="Enter Package Name" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label web-label">Package Price<span className="text-red">*</span></label>
                        <input type="number" min={0} value={amount} onChange={(e) => { setamount(e.target.value) }} className="form-control" placeholder="Enter Package Price" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label web-label">Package
                          Duration in Month*<span className="text-red">*</span></label>
                        <input type="number" min={0} max={12} value={duration} onChange={(e) => { setduration(e.target.value) }} className="form-control" placeholder="Enter Duration" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label web-label">Package
                          details<span className="text-red">*</span></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} placeholder="Enter Package Detail" value={details} onChange={(e) => { setdetails(e.target.value) }} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 form-group">
                          {addTaxLoading ? <i className="fas fa-spinner fa-pulse"></i> : <button type="button" onClick={() =>
                          details?.length > 0 && packagename?.length > 0
                            ? addPackHandler()
                            : Toasty(
                              "error",
                              `Please fill out all the required fields!`
                            )
                        } className="yel-btn">Submit</button>}
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
    </div>
  )
}

export default AddPackage