import React from 'react'

const UserManagementView = () => {
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
                    <h2><a href="index.php"><i className="fas p-lg fa-arrow-left" /></a> user profile
                      details</h2>
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
                <div className="py-4">
                  <div className="row my-4">
                    <div className="col-lg-12">
                      <img src="images/user-pic.png" alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 my-2">
                      <label htmlFor className="site-label mb-0">First Name</label>
                      <input type="email" defaultValue="Marson " disabled className="site-input" />
                    </div>
                    <div className="col-lg-12 my-2">
                      <label htmlFor className="site-label mb-0">Last Name</label>
                      <input type="email" defaultValue="Albert" disabled className="site-input" />
                    </div>
                    <div className="col-lg-12 my-2">
                      <label htmlFor className="site-label mb-0">Email Address</label>
                      <input type="email" defaultValue="marsonalbert@gmail.com" disabled className="site-input" />
                    </div>
                    <div className="col-lg-12 my-2">
                      <label htmlFor className="site-label mb-0">Phone Number</label>
                      <input type="email" defaultValue="+123 4567 890" disabled className="site-input" />
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

export default UserManagementView