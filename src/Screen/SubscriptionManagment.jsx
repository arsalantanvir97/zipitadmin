import React from 'react'

const SubscriptionManagment = () => {
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
                  <div className="col-md-6">
                    <h2> Subscription management</h2>
                  </div>
                  <div className="col-md-6">
                    <div className="dropdown text-end">
                      <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Profile Status: <span className="green-text semi-bold">Active</span>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#" data-toggle="modal" data-target="#for-active">Active</a></li>
                        <li><a className="dropdown-item" href="#" data-toggle="modal" data-target="#for-inactive">Inactive</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-md-flex align-items-center justify-content-between">
                  <h2 className="site-label">weekly package</h2>
                  <div className="d-flex align-items-center">
                    <div className="custom_canvas">
                      <button className="notBtn filterBtn me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fas fa-filter" /></button>
                      {/*  Filters Offcanvas sidebar Starts Here */}
                      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                          <h2 id="offcanvasRightLabel">Filters</h2>
                          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body customfilters pt-0 px-5">
                          {/* /// Sort By Date And Time /// */}
                          <label htmlFor className="my-2 site-label me-2">Sort By Date:</label>
                          <div className="my-3">
                            <label htmlFor="from" className="d-block site-label ms-3 grey-text">From</label>
                            <input id="from" className="site-input2 w-100" type="date" />
                          </div>
                          <div className="my-3">
                            <label htmlFor="to" className="d-block site-label ms-3 grey-text">To</label>
                            <input id="to" className="site-input2 w-100" type="date" />
                          </div>
                          <div className="my-1">
                            <label htmlFor="to" className="d-block site-label ms-3 grey-text">Record per
                              Page</label>
                            <select name id className="site-input2">
                              <option value selected disabled>Select</option>
                              <option value>25</option>
                              <option value>50</option>
                              <option value>100</option>
                            </select>
                          </div>
                          <div className="my-1">
                            <label htmlFor="to" className="d-block site-label ms-3 grey-text">Select
                              Status</label>
                            <select name id className="site-input2">
                              <option value selected disabled>Select</option>
                              <option value>25</option>
                              <option value>50</option>
                              <option value>100</option>
                            </select>
                          </div>
                          {/* /// filter by status ///  */}
                          <div className="my-4 text-center">
                            <button className="yel-btn my-2" type="button" data-bs-dismiss="offcanvas">Apply</button>
                            <button className="yel-btn2 my-2" type="button">Cancel</button>
                          </div>
                        </div>
                      </div>
                      {/*  Filters Offcanvas sidebar Ends Here */}
                    </div>
                    <div className="search-barr">
                      <input type="text" placeholder="Search Here...." className="site-input2" />
                      <button className="transparent-btn"><i className="fas fa-search m-grey-text" /></button>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="row">
                    <div className="col-lg-4 my-2">
                      <label htmlFor className="site-label mb-0">Package Price</label>
                      <p>$12.59</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 my-2">
                      <label htmlFor className="site-label mb-0">Package Details</label>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et blandit lacus
                        nec sodales mauris. Praesent eleifend sem in metus molestie, et gravida
                        ligula
                        consequat. Sed rhoncus tortor et rhoncus interdum. Nunc ac est rhoncus,
                        sollicitudin
                        lectus ac, placerat odio. Pellentesque imperdiet consectetur metus nec
                        volutpat.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 my-2">
                      <div className="d-inline-block text-center">
                        <a href="add-new-package.php" className="yel-btn ml-0">Add New Package</a>
                        <a href="edit-package.php" className="yel-btn2 ml-0">Edit Package</a>
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

export default SubscriptionManagment