import React, { useState, useEffect } from "react";
import Toasty from "../utils/toast";
import { closeModals } from "../utils/closeModals";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deletePackage, editPackage, getPackageDetails } from "../Api/Packages";
import SwalAlert from "../Components/SwalAlert";

const EditPackage = ({ match, history }) => {
    const usequeryClient = new useQueryClient();

    const [packagename, setpackagename] = useState("");
    const [amount, setamount] = useState("");
    const [details, setdetails] = useState("");
    const [duration, setduration] = useState("");
      const { isLoading, data: pacData } = useQuery(
        {
            queryKey: ["package", match.params.id],
            queryFn: () =>
                getPackageDetails(match.params.id),

        }
    );

    useEffect(() => {
      setpackagename(pacData?.data?.package?.packagename);
      setamount(pacData?.data?.package?.amount);
      setdetails(pacData?.data?.package?.details);
      setduration(pacData?.data?.package?.duration);

    }, [pacData])




    const { mutate: editPackages, isLoading: editTaxLoading } = useMutation((data) => editPackage(data), {
        retry: false,
        onSuccess: (res) => {
            SwalAlert('success', 'SUCCESS', 'Package Edited Successfully');
            usequeryClient.invalidateQueries(['packages',])
            usequeryClient.invalidateQueries(['package', match.params.id])
            history?.push('/SubscriptionManagment')
        },
        onError: (err) => Error(err?.response?.data?.message),
    });
    const editPacHandler = async () => {
      const body = { packagename,id:match?.params?.id,
        amount:Number(amount),
        details,
        duration:Number(duration) }  
              editPackages(body)
        // setpercent(0);
        // setstate("");
        closeModals();
    }
    const deletePackHandler = useMutation(
      {
        mutationFn: (data) => deletePackage(data),
  
        onSuccess: (res) => {
          SwalAlert('success', 'SUCCESS', 'Package Deleted Successfully');
  
          usequeryClient.invalidateQueries(['packages'])
          history?.push('/SubscriptionManagment')

        },
        onError: (err) => Error(err?.response?.data?.message),
      }
    );
  return (
    <div>{isLoading ? <div className="spinner-2 "></div> :<div className="app-content content users">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="row">
              <div className="col-12">
                <div className="dash-card mt-4">
                  <div className="row align-items-baseline">
                    <div className="col-md-12">
                      <h2><a href="subscription-management.php"><i className="fas p-lg fa-arrow-left" /></a> Edit subscription Package</h2>
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
                          Duration*<span className="text-red">*</span></label>
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
                      {editTaxLoading ? <i className="fas fa-spinner fa-pulse"></i> : <button type="button" className="yel-btn ml-0" data-dismiss="modal" data-toggle="modal" data-target="#update-secc"onClick={() =>
                          details?.length > 0 && packagename?.length > 0
                            ? editPacHandler()
                            : Toasty(
                              "error",
                              `Please fill out all the required fields!`
                            )
                        } >Update</button>}
                        <button   onClick={() => {
                                                      deletePackHandler.mutate(
                                                        match?.params?.id
                                                      );
                                                    }} type="button" className="yel-btn2 ml-0" data-dismiss="modal" data-toggle="modal" data-target="#del-secc">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>}
    </div>
  )
}

export default EditPackage