import moment from 'moment';
import React, { useState } from 'react'
import { notificationLogs } from '../Api/Users';
import { useMutation, useQuery, useQueryClient } from "react-query";

const Notifications = () => {
  const [sort, setsort] = useState();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  // const [feedbacklogs, setfeedbacklogs] = useState([]);
  const usequeryClient = new useQueryClient();

  const { isFetching, isLoading, data: noifligs,  refetch } = useQuery({
    queryKey: ["notification", page,
      perPage,
      from,
      to,
   ],
    queryFn: () => notificationLogs(page,
      perPage,
      from,
      to,
    ),
    keepPreviousData: true

  });

  return (
    <><div className="app-content content users">
    <div className="content-wrapper">
      <div className="content-body">
        {/* Basic form layout section start */}
        <section id="configuration">
          <div className="row">
            <div className="col-12">
              <div className="dash-card mt-4">
                <h2>Notification</h2>
                {noifligs?.docs?.length > 0 &&
                                    noifligs?.docs?.map(
                                      (not, index) => (

                <div className="notification-card mt-4">
                  <div className="d-md-flex align-items-center">
                  <span className="avatar avatar-online">
                      <img src="images/avatar.jpg" alt=""  />
                    </span>
                    <div className="flex-grow-1 mx-md-3 my-md-0 my-3">
                      <p className="mb-0 p-sm"> {not?.body}</p>
                      <div className="d-flex align-items-center">
                        <div className="d-flex m-grey-text align-items-center">
                          <i className="fas me-1 fa-clock" />
                          <p className="mb-0 p-sm">{moment(not?.createdAt).fromNow()}</p>
                        </div>
                        <span className="m-grey-text mx-2">|</span>
                        <div className="d-flex m-grey-text align-items-center">
                          <i className="fas me-1 fa-calendar" />
                          <p className="mb-0 p-sm">  {moment
                                  .utc(not?.createdAt)
                                  .format("LL")}</p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="text-end flex-shrink-0">
                      <button className="transparent-btn px-4 semi-bold p-sm m-grey-text mark-read underline">Mark
                        as Unread</button>
                    </div> */}
                  </div>
                </div>))}
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

export default Notifications