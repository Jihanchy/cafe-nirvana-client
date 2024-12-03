import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ViewCoffee = () => {
    const coffee = useLoaderData()
    const { name, _id, chef, supplier, taste, category, details, photo } = coffee
    console.log(coffee)
    return (
        <div className='bg-add_coffee_bg'>
            <div className='w-8/12 mx-auto  mt-4'>
                <Link to='/' className=' flex gap-2 text-xl font-semibold items-center'><span><FaArrowLeft /></span><span>Back to home</span></Link>
                <div className='bg-[#F4F3F0] grid grid-cols-1 md:grid-cols-2 items-center p-12 my-8'>
                    <div className='flex items-center justify-center'>
                        <img src={photo} alt="" />
                    </div>
                    <div>
                        <p><span className='font-semibold text-lg'>Name :  </span><span>{name}</span></p>
                        <p><span className='font-semibold text-lg'>Chef :  </span><span>{chef}</span></p>
                        <p><span className='font-semibold text-lg'>Taste :  </span><span>{taste}</span></p>
                        <p><span className='font-semibold text-lg'>Supplier :  </span><span>{supplier}</span></p>
                        <p><span className='font-semibold text-lg'>Categroy :  </span><span>{category}</span></p>
                        <p><span className='font-semibold text-lg'>Details :  </span><span>{details}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;