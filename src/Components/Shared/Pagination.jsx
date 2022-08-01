import React from 'react';
import {  MdArrowForwardIos,MdOutlineArrowBackIos } from "react-icons/md";

const Pagination = () => {
    return (
        <div className="my-[30px] flex justify-end mx-[26px]">
        <div class="btn-group text-[14px] pagination">
          <button class="btn border-none outline-none text-[#828282] w-[48px] hover:rounded-[4px] hover:text-white hover:bg-[#38B6FF] bg-[#F9F8FB]">
            <MdOutlineArrowBackIos />
          </button>

          <button class="btn border-none outline-none text-[14px] text-[#828282] w-[48px] h-[48px] font-bold hover:rounded-[4px] hover:text-white hover:bg-[#38B6FF] bg-[#F9F8FB]">1</button>
          <button class="btn border-none outline-none text-[14px] text-[#828282] w-[48px] h-[48px] font-bold hover:rounded-[4px] hover:text-white hover:bg-[#38B6FF] bg-[#F9F8FB]">2</button>
          <button class="btn border-none outline-none text-[14px] text-[#828282] w-[48px] h-[48px] font-bold hover:rounded-[4px] hover:text-white hover:bg-[#38B6FF] bg-[#F9F8FB]">3</button>
          <button class="btn border-none outline-none text-[14px] text-[#828282] w-[48px] h-[48px] font-bold hover:rounded-[4px] hover:text-white hover:bg-[#38B6FF] bg-[#F9F8FB]">. .</button>
          <button class="btn border-none outline-none text-[14px] text-[#828282] w-[48px] h-[48px] font-bold hover:rounded-[4px] hover:text-white hover:bg-[#38B6FF] bg-[#F9F8FB]">10</button>
          <button class="btn border-none outline-none text-[14px] text-[#828282] w-[48px] h-[48px] font-bold hover:rounded-[4px] hover:text-white hover:bg-[#38B6FF] bg-[#F9F8FB]">
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    );
};

export default Pagination;