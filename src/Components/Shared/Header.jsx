import React from "react";
import "./Header.css";
import bars from "../../Assets/icon/Group.png";

const Header = () => {
  return (
    <div>
      {/* ------------------dashboard header start--------------------- */}
      <div className="ml-2 lg:ml-[52px]   flex justify-start items-center h-[100px]">
        <div className="flex mx-3">
          <div className="flex justify-center items-center">
            <img src={bars} className="w-[27px] h-[18px]" alt="" />
          </div>

          <h1 className="open-sans text-[28px] ml-[39px]">Dashboard</h1>
        </div>
      </div>
      {/* ------------------dashboard header end--------------------- */}
      <div className="table-border">
        <div className=" ml-2 lg:ml-[52px] h-[55px] open-sans text-[20px] flex justify-start items-center">
          <span className="text-[#321FDB]">Home / </span>
          <span className="text-[#BDBDBD] ml-2"> Application Table</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
