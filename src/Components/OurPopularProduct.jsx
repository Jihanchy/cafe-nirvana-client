import React, { useState } from 'react';
import { BsCup } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Coffee from './Coffee';

const OurPopularProduct = ({ loadedCoffees }) => {
    const [coffees,setCoffees] = useState(loadedCoffees)
    return (
        <div className='bg-coffee_bg mt-20'>
            <div className='w-9/12 mx-auto'>
                <div className='flex justify-center flex-col items-center space-y-2 pb-5'>
                    <p>--- Sip & Savor ---</p>
                    <h2 className='text-4xl text-[#331A15]'>Our Popular Products</h2>
                    <Link to='/addCoffee'>
                        <button className='flex btn border-amber-950 hover:bg-transparent hover:text-[#e7a54e] bg-[#E3B577] text-white btn-sm rounded-md  justify-center items-center gap-2'>
                            <span>Add Coffee </span><span className='text-amber-900'><BsCup /></span>
                        </button>
                    </Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                    {
                        coffees.map(coffee => <Coffee key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></Coffee>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurPopularProduct;