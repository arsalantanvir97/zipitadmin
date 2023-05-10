import React from 'react'

const Dashboard = () => {
  return (
    <div><div className="app-content content dashboard">
    <div className="content-wrapper">
      <div className="content-body">
        {/* Basic form layout section start */}
        <section id="configuration">
          <div className="row">
            <div className="col-12">
              <div className=" rounded ">
                <div className="card-content collapse show">
                  <div className="card-body card-dashboard">
                    <div className="row">
                      <div className="col-xxl-12">
                        <div className="for-stat-card-bg">
                          <div className="row justify-content-center stat-cards">
                            <div className="my-3 col-xxl-4 col-xl-5 col-md-6">
                              <div className="stat-card">
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                    <img src="images/d-1.png" alt="" className="img-fluid stat-img" />
                                  </div>
                                  <div className="flex-grow-1 ms-2">
                                    <h3 className="blue-text mb-0">100</h3>
                                    <p className="grey-text mb-0 p-sm">TOTAL USERS</p>
                                  </div>
                                  <div className="flex-grow-1 ms-2">
                                    <h3 className="blue-text mb-0 small-font">100</h3>
                                    <p className="grey-text mb-0 p-sm small-font">Since last
                                      week</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="my-3 col-xxl-4 col-xl-5 col-md-6">
                              <div className="stat-card">
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                    <img src="images/d-2.png" alt="" className="img-fluid stat-img" />
                                  </div>
                                  <div className="flex-grow-1 ms-2">
                                    <h3 className="blue-text mb-0">22</h3>
                                    <p className="grey-text mb-0 p-sm">TOTAL SUBSCRIPTION</p>
                                  </div>
                                  <div className="flex-grow-1 ms-2">
                                    <h3 className="blue-text mb-0 small-font">100</h3>
                                    <p className="grey-text mb-0 p-sm small-font">Since last
                                      week</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom tickets for-stat-card-bg mt-4 p-5">
                      <div className="row">
                        <div className="col-6">
                          <h1 className="cart-heading">Subscriptions</h1>
                        </div>
                        <div className="col-6 text-right">
                          <select name id>
                            <option value>Select Year</option>
                            <option value>2012</option>
                            <option value>2012</option>
                            <option value>2012</option>
                            <option value>2012</option>
                            <option value>2012</option>
                          </select>
                        </div>
                      </div>
                      <div className="chart-main position-relative">
                        <div className="row">
                          <div className="col-xl-1 col-12">
                            <h4>Amount</h4>
                          </div>
                          <div className="col-12 col-xl-11">
                            <div className="chartjs">
                              <canvas id="line-stacked-area-1" height={250} />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 text-center">
                            <h3>Duration</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <h4>Activity Log</h4>
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
  </div>
  )
}

export default Dashboard