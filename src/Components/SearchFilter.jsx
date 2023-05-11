import React from "react";

const SearchFilter = ({
  searchString,
  setSearchString,
  setPage,
  functionhandler
}) => {
  return (
<>
    <input type="email"  value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
          setPage(1);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            functionhandler();
          }
        }} name placeholder="Search...." className="site-input2"/>
        <button className="transparent-btn"><i className="fas fa-search m-grey-text" /></button></>
    // <div>
    //   {" "}
    //   <input
    //     type="search"
    //     className="form-control form-control-sm"
    //     placeholder="Search"
    //     value={searchString}
    //     onChange={(e) => {
    //       setSearchString(e.target.value);
    //       setPage(1);
    //     }}
    //     onKeyDown={(e) => {
    //       if (e.key === "Enter") {
    //         functionhandler();
    //       }
    //     }}
    //   />
    // </div>
  );
};

export default SearchFilter;
