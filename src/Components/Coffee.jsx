import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, coffees, setCoffees }) => {
    const { name, chef, _id, taste, photo } = coffee || {}
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remaining = coffees.filter(coffe => coffe._id !== id)
                        setCoffees(remaining)
                    })
            }
        });

    }
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
                <Link to={`/viewCoffee/${_id}`}><button className="btn join-item bg-[#e7a54e] text-white"><FaEye /></button></Link>
                <Link to={`/updateCoffee/${_id}`}><button className="btn join-item bg-neutral text-white"><MdEdit /></button></Link>
                <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-600 text-white "><MdDelete /></button>
            </div>
        </div>
    );
};

export default Coffee;