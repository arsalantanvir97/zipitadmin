import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUsers, changeStatus } from "../Api/Users";
import moment from 'moment';
import { Link } from 'react-router-dom';
import Pagination from '../Components/Padgination';
import SearchFilter from '../Components/SearchFilter';
import Calender from '../Components/Calendar';

const UserManagement = () => {
  const usequeryClient = new useQueryClient();


  const [sort, setsort] = useState();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");

  const [to, setTo] = useState("");
  const [userstatus, setuserstatus] = useState("");

  const { isFetching, isLoading, data: userslogs, status: prodstatus, refetch } = useQuery({
    queryKey: ["users", page, perPage, from, to, searchString, sort, userstatus],
    queryFn: () => getUsers(page, perPage, from, to, searchString, sort, userstatus),
    keepPreviousData: true

  });


  return (
    <>{isLoading ? <div className="spinner-2 "></div> :<div className="app-content content users">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="row">
              <div className="col-12">
                <div className="dash-card mt-4">
                  <div className="d-md-flex align-items-center justify-content-between">
                    <h2>User Management</h2>
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
                            <Calender
                              from={from}
                              to={to}
                              setFrom={setFrom}
                              setTo={setTo}
                            />

                            <div className="my-1">
                              <label htmlFor="to" className="d-block site-label ms-3 grey-text">Record per
                                Page</label>
                              <select name id className="site-input2" value={perPage}
                                onChange={async (e) => {
                                  await setPerPage(e.target.value);
                                  await setPage(1)

                                }}
                              >
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                              </select>
                            </div>
                            <div className="my-1">
                              <label htmlFor="to" className="d-block site-label ms-3 grey-text">Select
                                Status</label>
                              <select name id className="site-input2" value={userstatus}
                                onChange={(e) => {
                                  setuserstatus(e.target.value);
                                  setPage(1);
                                }}
                              >
                                <option value="">All</option>

                                <option value={true}>Active</option>
                                <option value={false}>Inactive</option>
                              </select>
                            </div>
                            {/* /// filter by status ///  */}
                            {/* <div className="my-4 text-center">
                              <button className="yel-btn my-2" type="button" data-bs-dismiss="offcanvas">Apply</button>
                              <button className="yel-btn2 my-2" type="button">Cancel</button>
                            </div> */}
                          </div>
                        </div>
                        {/*  Filters Offcanvas sidebar Ends Here */}
                      </div>
                      <div className="search-barr">
                        <SearchFilter
                          searchString={searchString}
                          setSearchString={setSearchString}
                          setPage={setPage}
                        />

                      </div>
                    </div>
                  </div>
                  <div className="table-responsive mt-4">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>S. NO.</th>
                          <th>Full Name</th>
                          <th>Email Address</th>
                          <th>Date</th>
                          <th>STATUS</th>
                          <th className="text-center">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userslogs?.docs?.length > 0 &&
                          userslogs?.docs?.map((userr, index) => (

                            <tr>
                              <td className>{index + 1}</td>
                              <td>{userr?.firstName + ' ' + userr?.lastName}</td>
                              <td>{userr?.email}</td>
                              <td>
                                {moment
                                  .utc(userr?.createdAt)
                                  .format("LL")}
                              </td>                          <td><span className={userr?.status?'green-text semi-bold':'t-red-text semi-bold'}>  {userr?.status
                                ? "Active"
                                : "Inactive"}</span></td>
                              <td className="text-center"><Link to={`/UserManagementView/${userr?._id}`} className="fas fa-eye table-eye" /></td>
                            </tr>))}
                      </tbody>
                    </table>
                  </div>
                  {userslogs?.docs?.length > 0 && (
                    <Pagination
                      totalDocs={userslogs?.totalDocs}
                      totalPages={userslogs?.totalPages}
                      currentPage={userslogs?.page}
                      setPage={setPage}
                      hasNextPage={userslogs?.hasNextPage}
                      hasPrevPage={userslogs?.hasPrevPage}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>}
    </>
  )
}

export default UserManagement