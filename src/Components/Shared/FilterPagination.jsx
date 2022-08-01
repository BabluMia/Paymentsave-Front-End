import React from 'react';

const FilterPagination = () => {
    return (
        
      <div className="flex justify-between ml-[28px] mr-[25px]">
        {/* ---------------filter and pagination------------ */}
      <div className="flex items-center">
        <p>Filtere:</p>
        <input
          className="w-[160px] h-[40px] rounded-[4px] outline-none pl-[20px] ml-[6px]"
          style={{ border: "1px solid #BDBDBD" }}
          type="text"
          placeholder="type string..."
        />
      </div>
      <div className="flex items-center">
        <p className="text-[16px] mr-[8px]">Item per page:</p>
        <select
          name=""
          id=""
          className="rounded-[4px] w-[80px] h-[40px] px-2 text-[#BDBDBD] outline-none"
          style={{ border: "1px solid #BDBDBD" }}
        >
          <option className="text-[14px]" value="10" selected>
            10
          </option>
          <option className="text-[14px]" value="5">
            5
          </option>
          <option className="text-[14px]" value="15">
            15
          </option>
        </select>
      </div>
      {/* ---------------filter and pagination------------ */}
    </div>
    
    );
};

export default FilterPagination;