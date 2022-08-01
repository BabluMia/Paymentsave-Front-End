import React from "react";
import ApplicationTop from "./ApplicationTop";
import "./Application.css";
import eye from "../../Assets/icon/eye.png";
import { FaEye } from "react-icons/fa";

import FilterPagination from "../Shared/FilterPagination";
import Pagination from "../Shared/Pagination";

const NewApplication = () => {
  const applications = [
    {
      _id: 1,
      clientId: "CB680",
      partnerName: "Jenny Wilson",
      legalName: "Cody Fisher",
      tradingName: "shafin ltd.T/A shafin",
      recievedDate: "15 May 2020, 9:30 am",
      applicationNote: `Store Deals Dash: Coupon 'GIVE' Added`,
      bg: "bg-white",
    },
    {
      _id: 2,
      clientId: "CB740",
      partnerName: "Jane Cooper",
      legalName: "Kathryn Murphy",
      tradingName: "shafin ltd.T/A shafin",
      recievedDate: "15 May 2020, 8:30 am",
      applicationNote: `Whitney: 7 business seats, 10% discount ...`,
      bg: "bg-[#EFEFF1]",
    },
    {
      _id: 3,
      clientId: "CB690",
      partnerName: "Leslie Alexander",
      legalName: "Darrell Steward",
      tradingName: "shafin ltd.T/A shafin",
      recievedDate: "15 May 2020, 9:30 am",
      applicationNote: `Whitney had previously pitched a contract`,
      bg: "bg-white",
    },
    {
      _id: 4,
      clientId: "CB970",
      partnerName: "Dianne Russell",
      legalName: "Ralph Edwards",
      tradingName: "shafin ltd.T/A shafin",
      recievedDate: "15 May 2020, 9:00 am",
      applicationNote: `Tyra has agreed to attend the event an..`,
      bg: "bg-[#EFEFF1]",
    },
    {
      _id: 5,
      clientId: "CB250",
      partnerName: "Albert Flores",
      legalName: "Kristin Watson",
      tradingName: "shafin ltd.T/A shafin",
      recievedDate: "15 May 2020, 8:00 am",
      applicationNote: `Rochel has agreed to attend the event an..`,
      bg: "bg-white",
    },
    {
      _id: 6,
      clientId: "CB730",
      partnerName: "Ronald Richards",
      legalName: "Savannah Nguyen",
      tradingName: "shafin ltd.T/A shafin",
      recievedDate: "15 May 2020,  9:30 am",
      applicationNote: `Darcel is pretty good. We should include..`,
      bg: "bg-[#EFEFF1]",
    },
  ];
  return (
    <div className="open-sans">
      <ApplicationTop />
      <FilterPagination />
      {/* ---------------main table start----------------- */}

      <div className="mt-[16px]  mr-[25px] mb-12">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead className="bg-[#D8E3E7] border-b-[0.4px] rounded-tl-[5px] rounded-tr-[5px]  border-[#BDBDBD]">
              <tr>
                <th className="border-r-[0.4px] w-[118px] a_id border-[#BDBDBD]  border-b-[0.4px] ">
                  <span className="text-[14px]"> Client Id</span>{" "}
                  <span className="text-[#828282] ml-[25px]  w-[10px] h-[14px] mb-2">
                    &#8593;
                  </span>
                </th>
                <th className="border-r-[0.4px] w-[140px] border-[#BDBDBD] border-b-[0.4px]">
                  Partner Name{" "}
                  <span className="text-[#828282] ml-[25px] w-[10px]  ">
                    &#8593;
                  </span>
                </th>
                <th className=" border-r-[0.4px] w-[153px] border-[#BDBDBD] border-b-[0.4px]">
                  <span>Legal Name</span>{" "}
                  <span className="text-[#828282] ml-[25px] w-[10px] h-[14px] ">
                    &#8593;
                  </span>
                </th>
                <th className="border-r-[0.4px] w-[160px] border-[#BDBDBD] border-b-[0.4px] ">
                  <span>Trading name</span>{" "}
                  <span className="text-[#828282] ml-[35px] w-[10px] h-[14px] mb-1 ">
                    &#8593;
                  </span>
                </th>
                <th className="border-r-[0.4px] w-[166px] border-[#BDBDBD] border-b-[0.4px]">
                  <span>Recieved Date</span>{" "}
                  <span className="text-[#828282] ml-[42px] w-[10px] h-[14px] mb-1 ">
                    &#8593;
                  </span>
                </th>
                <th className="border-r-[0.4px] w-[278px] border-[#BDBDBD] border-b-[0.4px]">
                  <span>Application Note</span>{" "}
                  <span className="text-[#828282] ml-[110px] w-[10px] h-[14px] mb-1 ">
                    &#8593;
                  </span>
                </th>
                <th className="text-center mb-[3px] border-[#BDBDBD]  border-b-[0.4px]">
                  Action
                </th>
              </tr>
            </thead>
            {/* <thead className="bg-[#D8E3E7]"></thead> */}
            <tbody>
              <tr className="bg-[#D8E3E7] capitalize ">
                <th className="py-[12px] a_id border-b-[0.4px] border-x-[0.4px] border-[#BDBDBD]">
                  <input
                    type="text"
                    className="w-[88px] h-[24px] rounded-[4px]"
                  />
                </th>
                <th className="border-b-[0.4px] border-x-[0.4px] border-[#BDBDBD]   py-[12px]">
                  <input
                    className="w-[118px] h-[24px] rounded-[4px]"
                    type="text"
                  />
                </th>

                <th className="border-b-[0.4px] border-x-[0.4px] border-[#BDBDBD] py-[12px]">
                  <input
                    className="w-[127px] h-[24px] rounded-[4px]"
                    type="text"
                  />
                </th>
                <th className="border-b-[0.4px] border-x-[0.4px] border-[#BDBDBD]  py-[12px]">
                  <input
                    className="w-[138px] h-[24px] rounded-[4px]"
                    type="text"
                  />
                </th>
                <th className="border-b-[0.4px] border-x-[0.4px] border-[#BDBDBD]  py-[12px]">
                  <input
                    type="text"
                    className="w-[142px] h-[24px] rounded-[4px]"
                  />
                </th>
                <th className="border-b-[0.4px] border-x-[0.4px] border-[#BDBDBD]  py-[12px]">
                  <input
                    className="w-[237px] h-[24px] rounded-[4px]"
                    type="text"
                  />
                </th>
                <th className="border-b-[0.4px] border-x-[0.4px] border-[#BDBDBD]  pb-[18px]  w-[132px] ">
                  <img
                    src={eye}
                    className="w-[24px] mx-[36px] h-[18px] "
                    alt=""
                  />
                </th>
              </tr>
              {applications.map((application) => (
                <tr
                  className={`${application.bg} border-x-[0.4px] hover:bg-[#1E2553] hover:text-white`}
                  key={application._id}
                >
                  <th className="border-y-[0.4px] a_id  text-start th border-r-[0.4px]   border-[#BDBDBD] ">
                    {application.clientId}
                  </th>
                  <td className="border-y-[0.4px]  border-[#BDBDBD] border-r-[0.4px] ">
                    {application.partnerName}
                  </td>
                  <td className="border-y-[0.4px]  border-[#BDBDBD] border-r-[0.4px] ">
                    {application.legalName}
                  </td>
                  <td className="border-y-[0.4px]  border-[#BDBDBD] border-r-[0.4px] ">
                    {application.tradingName}
                  </td>
                  <td className="border-y-[0.4px]  border-[#BDBDBD] border-r-[0.4px] ">
                    {application.recievedDate}
                  </td>
                  <td className="border-y-[0.4px]  border-[#BDBDBD] border-r-[0.4px] ">
                    {application.applicationNote}
                  </td>
                  <td className=" border-y-[0.4px]  border-[#BDBDBD] border-r-[0.4px]  cursor-pointer">
                    <button className="custom flex justify-center items-center mx-[20px] w-[86px] h-[32px] border-[1px] border-[#828282] rounded-[4px]">
                      {/* <img src={eye} className="w-[16px] h-[12px]" alt="" /> */}
                      <FaEye className="w-[16px] h-[12px]" />
                      <span className="ml-[8px]">Review</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------main table end----------------- */}
      {/* ---------------pagination start------------- */}
      <Pagination />
      {/* ---------------pagination end------------- */}
    </div>
  );
};

export default NewApplication;
