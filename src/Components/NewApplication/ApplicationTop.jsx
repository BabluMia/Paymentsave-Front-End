import React from 'react';
import application from '../../Assets/icon/appli.png'
import printer from '../../Assets/icon/printer.png'

const ApplicationTop = () => {
    return (
        <div className='ml-[29px] mr-[25px] mt-[37px] mb-[38px]'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-[27px] h-[36px]' src={application} alt="" />
                    </div>
                    <h2 className='open-sans text-[34px] text-[#1E2553] ml-[15px]'>New Application</h2>
                </div>
                <div className='w-[56px] h-[56px] rounded-full bg-[#F2F2F7] grid place-items-center cursor-pointer'>
                    <img color='#004C1B' className='w-[26px] h-[28px]' src={printer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ApplicationTop;