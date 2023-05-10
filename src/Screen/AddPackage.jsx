import React from 'react'

const AddPackage = () => {
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
                      <input type="email" className="form-control" placeholder="Enter Package Name" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 form-group">
                      <label htmlFor="exampleInputEmail1" className="form-label web-label">Package Price<span className="text-red">*</span></label>
                      <input type="email" className="form-control" placeholder="Enter Package Price" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 form-group">
                      <label htmlFor="exampleInputEmail1" className="form-label web-label">Package
                        Duration*<span className="text-red">*</span></label>
                      <input type="email" className="form-control" placeholder="dd/mmm/yyy" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 form-group">
                      <label htmlFor="exampleInputEmail1" className="form-label web-label">Package
                        details<span className="text-red">*</span></label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} placeholder="Enter Package Detail" defaultValue={""} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 form-group">
                      <button type="button" className="yel-btn">Submit</button>
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