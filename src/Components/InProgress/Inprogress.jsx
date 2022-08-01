import React from "react";
import FilterPagination from "../Shared/FilterPagination";
import Pagination from "../Shared/Pagination";
import "./Inprogress.css";
import InprogressTop from "./InprogressTop";

const Inprogress = () => {
  const applications = [
    {
      _id: 1,
      clientId: "CB680",
      partnerName: "Jenny Wilson",
      legalName: "Cody Fisher",
      tradingName: "shafin ltd.T/A shafin",
      subbmitionDate: "28 May 2020, 9:30 am",
      recievedDate: "29 May 2020, 9:30 am",

      applicationStage: "Recived",
      bg: "bg-white",
      buttonBg: "bg-[#66BB6A]",
    },
    {
      _id: 2,
      clientId: "CB740",
      partnerName: "Jane Cooper",
      legalName: "Kathryn Murphy",
      tradingName: "shafin ltd.T/A shafin",

      subbmitionDate: "26 May 2020, 9:30 am",
      recievedDate: "27 May 2020, 8:30 am",

      applicationStage: "Sent to E-sign",
      bg: "bg-[#EFEFF1]",
      buttonBg: "bg-[#EF5350]",
    },
    {
      _id: 3,
      clientId: "CB690",
      partnerName: "Leslie Alexander",
      legalName: "Darrell Steward",
      tradingName: "shafin ltd.T/A shafin",
      subbmitionDate: "25 May 2020, 9:30 am",
      recievedDate: "26 May 2020, 9:30 am",

      applicationStage1: "Application to",
      applicationStage2: " Bank",
      bg: "bg-white",
      buttonBg: "bg-[#FFA726]",
    },
    {
      _id: 4,
      clientId: "CB970",
      partnerName: "Dianne Russell",
      legalName: "Ralph Edwards",
      tradingName: "shafin ltd.T/A shafin",
      subbmitionDate: "24 May 2020, 9:30 am",
      recievedDate: "25 May 2020, 9:00 am",

      applicationStage1: "Application",
      applicationStage2: " Approved",
      bg: "bg-[#EFEFF1]",
      buttonBg: "bg-[#66BB6A]",
    },
    {
      _id: 5,
      clientId: "CB250",
      partnerName: "Albert Flores",
      legalName: "Kristin Watson",
      tradingName: "shafin ltd.T/A shafin",
      subbmitionDate: "23 May 2020, 9:30 am",
      recievedDate: "24 May 2020, 8:00 am",

      applicationStage: "Terminal Order",
      bg: "bg-white",
      buttonBg: "bg-[#29B6F6]",
    },
    {
      _id: 6,
      clientId: "CB730",
      partnerName: "Ronald Richards",
      legalName: "Savannah Nguyen",
      tradingName: "shafin ltd.T/A shafin",
      subbmitionDate: "22 May 2020, 9:30 am",
      recievedDate: "23 May 2020,  9:30 am",

      applicationStage: "Transecting",
      bg: "bg-[#EFEFF1]",
      buttonBg: "bg-[#EF5350]",
    },
  ];
  return (
    <div className="open-sans border-t-[#E0E0E0] mr-[25px] border-t-[1px] ">
      <InprogressTop />
      <FilterPagination />
      {/* ----------------inprogress------------------- */}
      <div>
        <div className="mt-[16px]   mb-12">
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead className="bg-[#D8E3E7] capitalize">
                <tr>
                  <th className="border-r-[0.4px] c_id  border-b-[0.4px] border-[#BDBDBD] ">
                    <span className="text-[14px]"> Client Id</span>{" "}
                    <span className="text-[#828282] ml-[16px] w-[10px] h-[14px] mb-1">
                      &#8593;
                    </span>
                  </th>
                  <th className="border-r-[0.4px] border-b-[0.4px] border-[#BDBDBD]">
                    Partner Name{" "}
                    <span className="text-[#828282] ml-[25px] w-[10px]  ">
                      &#8593;
                    </span>
                  </th>
                  <th className=" border-b-[0.4px] border-r-[0.4px] border-[#BDBDBD]">
                    <span>Legal Name</span>{" "}
                    <span className="text-[#828282] ml-[25px] w-[10px] h-[14px] ">
                      &#8593;
                    </span>
                  </th>
                  <th className="border-r-[0.4px] border-b-[0.4px] border-[#BDBDBD]">
                    <span>Trading name</span>{" "}
                    <span className="text-[#828282] ml-[35px] w-[10px] h-[14px] mb-1 ">
                      &#8593;
                    </span>
                  </th>
                  <th className="border-r-[0.4px] border-b-[0.4px] border-[#BDBDBD]">
                    <span>Submition Date</span>{" "}
                    <span className="text-[#828282] ml-[35px] w-[10px] h-[14px] mb-1 ">
                      &#8593;
                    </span>
                  </th>
                  <th className="border-r-[0.4px] border-b-[0.4px] border-[#BDBDBD]">
                    <span>Recieved Date</span>{" "}
                    <span className="text-[#828282] ml-[42px] w-[10px] h-[14px] mb-1 ">
                      &#8593;
                    </span>
                  </th>
                  <th className="border-r-[0.4px] border-b-[0.4px] border-[#BDBDBD]">
                  <div className="flex justify-between items-center">
                      <span className="text-center">
                      Elavon <br />  Application Stage
                      </span>{" "}
                      <span className="text-[#828282] ml-[3px]  w-[10px] h-[14px] mb-1 ">
                        &#8593;
                      </span>
                    </div>
                    
                  </th>
                  <th className=" border-b-[0.4px] border-[#BDBDBD]">
                    <div className="flex justify-between items-center">
                      <span className="text-center">
                      CRM <br />  Application Stage
                      </span>{" "}
                      <span className="text-[#828282] ml-[3px] w-[10px] h-[14px] mb-1 ">
                        &#8593;
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <thead className="bg-[#D8E3E7]">
                <tr>
                  <th className="border-x-[0.4px] c_id  border-b-[0.4px]  py-[12px] border-[#BDBDBD]">
                    <input
                      type="text"
                      className="w-[88px] h-[24px] rounded-[4px]"
                    />
                  </th>
                  <th className="border-r-[0.4px] border-b-[0.4px]  py-[12px] border-[#BDBDBD]">
                    <input
                      className="w-[105px] h-[24px] rounded-[4px]"
                      type="text"
                    />
                  </th>

                  <th className="border-r-[0.4px] border-b-[0.4px] border-[#BDBDBD]">
                    <input
                      className="w-[109px] h-[24px] rounded-[4px]"
                      type="text"
                    />
                  </th>
                  <th className="border-r-[0.4px] border-b-[0.4px]  py-[12px] border-[#BDBDBD]">
                    <input
                      className="w-[125px] h-[24px] rounded-[4px]"
                      type="text"
                    />
                  </th>
                  <th className="border-r-[0.4px] border-b-[0.4px]  py-[12px] border-[#BDBDBD]">
                    <input
                      type="text"
                      className="w-[130px] h-[24px] rounded-[4px]"
                    />
                  </th>
                  <th className="border-r-[0.4px] border-b-[0.4px] py-[12px] border-[#BDBDBD]">
                    <input
                      className="w-[132px] h-[24px] rounded-[4px]"
                      type="text"
                    />
                  </th>
                  <th className="border-r-[0.4px] border-b-[0.4px]  py-[12px] border-[#BDBDBD]">
                    <input
                      className="w-[119px] h-[24px] rounded-[4px]"
                      type="text"
                    />
                  </th>
                  <th className=" border-b-[0.4px] border-r-[0.4px]  py-[12px] border-[#BDBDBD]">
                    <input
                      className="w-[128px] h-[24px] rounded-[4px]"
                      type="text"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application) => (
                  <tr
                    className={`${application.bg} custom hover:bg-[#1E2553] border-l-[0.4px] border-x-[0.4px] border-b-[0.4px] hover:text-white`}
                    key={application._id}
                  >
                    <th className="border-r-[0.4px] c_id border-b-[0.4px]    border-[#BDBDBD] th">
                      {application.clientId}
                    </th>
                    <td className="border-r-[0.4px]  border-b-[0.4px]  border-[#BDBDBD]">
                      {application.partnerName}
                    </td>
                    <td className="border-r-[0.4px] border-b-[0.4px]  border-[#BDBDBD]">
                      {application.legalName}
                    </td>
                    <td className="border-r-[0.4px] border-b-[0.4px]  border-[#BDBDBD]">
                      {application.tradingName}
                    </td>
                    <td className="border-r-[0.4px] border-b-[0.4px]  border-[#BDBDBD]">
                      {application.subbmitionDate}
                    </td>
                    <td className="border-r-[0.4px] border-b-[0.4px]  border-[#BDBDBD]">
                      {application.recievedDate}
                    </td>

                    <td className="border-r-[0.4px] border-b-[0.4px]  text-center   border-[#BDBDBD] cursor-pointer">
                    {
                        application.applicationStage?
                        <button
                        className={`${application.buttonBg} w-[102px] h-[30px] text-center rounded-[4px] `}
                      >
                        {application.applicationStage}
                      </button> :<button style={{lineHeight:'15px'}} className={`${application.buttonBg} w-[102px] h-[31px] text-center rounded-[4px] `}>
                        <p>{application.applicationStage1}</p>
                        <p>{application.applicationStage2}</p>
                      </button>
                      }
                    </td>

                    <td className="border-r-[0.4px] border-b-[0.4px]  text-center   border-[#BDBDBD] cursor-pointer">
                      {
                        application.applicationStage?
                        <button
                        className={`${application.buttonBg} w-[102px] h-[31px] text-center rounded-[4px] `}
                      >
                        {application.applicationStage}
                      </button> :<button style={{lineHeight:'15px'}} className={`${application.buttonBg}  w-[102px] h-[30px] text-center rounded-[4px] `}>
                        <p>{application.applicationStage1}</p>
                        <p>{application.applicationStage2}</p>
                      </button>
                      }
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* -----------------pagination------------ */}
      <Pagination />
    </div>
  );
};

export default Inprogress;
