import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';

const Coffee = ({ coffee }) => {
    const { name, chef, _id, taste, photo } = coffee || {}
    return (
        <div className='md:flex gap-4 p-8 items-center rounded-lg shadow-lg'>
            <div className=' flex-1 flex justify-center items-center'>
                <img className='h-32 md:h-full' src={photo} alt="" />
            </div>
            <div className=' flex-1' >
                <p><span className='font-semibold text-lg'>Name :  </span><span>{name}</span></p>
                <p><span className='font-semibold text-lg'>Chef :  </span><span>{chef}</span></p>
                <p><span className='font-semibold text-lg'>Taste :  </span><span>{taste}</span></p>
            </div>
            <div className="join md:join-vertical mt-3 md:mt-0 space-x-4 md:space-x-0 md:space-y-4">
                <button className="btn join-item bg-[#e7a54e] text-white"><FaEye/></button>
                <button className="btn join-item bg-neutral text-white"><MdEdit/></button>
                <button className="btn join-item bg-red-600 text-white "><MdDelete/></button>
            </div>
        </div>
    );
};

export default Coffee;