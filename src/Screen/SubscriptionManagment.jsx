import React from 'react'
import { getPackages } from '../Api/Packages';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const SubscriptionManagment = () => {
  const { isLoading: catloading, data: packages } = useQuery(["packages"], () =>
    getPackages()
  );

  return (
    <>{catloading ? <div className="spinner-2 "></div> :<div className="app-content content users">
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
                    <div style={{textAlign:'right'}}>
                      <Link to='/AddPackage' className="yel-btn ml-0">Add New Package</Link>
                      </div>
                  </div>

                  {packages?.length > 0 && packages?.map(pack =>
                    <div >
                      <div className="py-4">
                        <div className="row">
                          <div className="col-lg-4 my-2">
                            <label htmlFor className="site-label mb-0">Package Price</label>
                            <p>${pack?.amount}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 my-2">
                            <label htmlFor className="site-label mb-0">Package Details</label>
                            <p>{pack?.details}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 my-2">
                            <div className="d-inline-block text-center">
                              <Link to={`/EditPackage/${pack?._id}`} className="yel-btn2 ml-0">Edit Package</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
}</>
  )
}

export default SubscriptionManagment