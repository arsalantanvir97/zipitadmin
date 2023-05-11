import React from "react";
import DatePicker from "react-datepicker";

const Calender = ({from,to,setFrom,
    setTo}) => {
  return (
    <>
 {/* <div className="mb-2">
                                  <input className="mainInput filterInput" type="date" />
                                </div>
                                <div className="mb-2">
                                  <input className="mainInput filterInput" type="date" />
                                </div>
                              </div>
 */}

      <div className="my-3">
      <label htmlFor="from" className="d-block site-label ms-3 grey-text">From</label>

        <DatePicker
          placeholderText="Select a starting date"
          selected={from}
          onChange={(from) => setFrom(from)}
          className="site-input2 w-100"
        />{" "}
      </div>
      <div className="my-3">
      <label htmlFor="to" className="d-block site-label ms-3 grey-text">To</label>
        <DatePicker
          selected={to}
          placeholderText="Select an ending date"
          onChange={(to) => setTo(to)}
          className="site-input2 w-100"
        />{" "}
      </div>
    </>
  );
};

export default Calender;
