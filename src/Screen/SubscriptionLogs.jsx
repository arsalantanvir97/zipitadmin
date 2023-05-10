import React from 'react'

const SubscriptionLogs = () => {
  return (
    <><div className="app-content content users">
    <div className="content-wrapper">
      <div className="content-body">
        {/* Basic form layout section start */}
        <section id="configuration">
          <div className="row">
            <div className="col-12">
              <div className="dash-card mt-4">
                <div className="d-md-flex align-items-center justify-content-between">
                  <h2>Subscription Logs</h2>
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
                <div className="table-responsive mt-4">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>S. NO.</th>
                        <th>Full Name</th>
                        <th>Package Type</th>
                        <th>Amount</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01</td>
                        <td>abc</td>
                        <td>Mothly</td>
                        <td>$12</td>
                        <td>01/01/2023</td>
                      </tr>
                      <tr>
                        <td>02</td>
                        <td>abc</td>
                        <td>Mothly</td>
                        <td>$123</td>
                        <td>01/01/2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-md-flex align-items-center justify-content-between">
                  <p className="m-grey-text mb-0">Showing 05 out of 20 Entries</p>
                  <nav aria-label="...">
                    <ul className="pagination d-inline-flex mb-0 mt-3 mt-md-0">
                      <li className="page-item disabled"><a className="page-link">Previous</a></li>
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                  </nav>
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

export default SubscriptionLogs