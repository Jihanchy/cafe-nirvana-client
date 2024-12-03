import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const singleCoffee = useLoaderData()
    const handleUpdateCoffee = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const user = {name,chef,supplier,taste,category,details,photo}
        console.log(user)
        fetch(`http://localhost:4000/coffees/${singleCoffee._id}`,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
        })
    } 
    return (
        <div className='bg-add_coffee_bg py-10'>
            <div className='w-11/12 md:w-8/12 mx-auto'>
                <Link to='/' className=' flex gap-2 text-xl font-semibold items-center'><span><FaArrowLeft /></span><span>Back to home</span></Link>
                <div className='bg-[#F4F3F0] py-9 md:py-14 px-10 md:px-20 mt-5'>
                    <div className='text-center space-y-2'>
                        <h3 className='text-3xl font-semibold text-neutral'>Update Existing Coffee</h3>
                        <p className='font-thin'>It is a long established fact that a reader
                            will be distraceted by the readable content
                            of a page when looking at its layout.
                            The point of using Lorem
                            Ipsum is that it has a more-or-less
                            normal distribution of letters, as
                            opposed to using Content here.
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleUpdateCoffee}>
                            {/* row-1 */}
                            <div className='flex gap-5'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold">Name</span>
                                    </div>
                                    <input name="name" type="text" defaultValue={singleCoffee.name} placeholder="Enter Coffee name" className="input input-sm md:input-md w-full " />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold">Chef</span>
                                    </div>
                                    <input name="chef" type="text" defaultValue={singleCoffee.chef} placeholder="Enter Coffee Chef" className="input input-sm md:input-md w-full " />
                                </label>
                            </div>
                            {/* row-2 */}
                            <div className='flex gap-5'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold">Supplier</span>
                                    </div>
                                    <input name="supplier" type="text" defaultValue={singleCoffee.supplier} placeholder="Enter Coffee Supplier" className="input input-sm md:input-md w-full " />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold">Taste</span>
                                    </div>
                                    <input name="taste" type="text" defaultValue={singleCoffee.taste} placeholder="Enter Coffee Taste" className="input input-sm md:input-md w-full " />
                                </label>
                            </div>
                            {/* row-3 */}
                            <div className='flex gap-5'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold">Category</span>
                                    </div>
                                    <input name="category" type="text" defaultValue={singleCoffee.category} placeholder="Enter Coffee Category" className="input input-sm md:input-md w-full " />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold">Details</span>
                                    </div>
                                    <input name="details" type="text" defaultValue={singleCoffee.details} placeholder="Enter Coffee Details" className="input input-sm md:input-md w-full " />
                                </label>
                            </div>
                            {/* row-4 */}
                            <div className=''>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold">Photo URL</span>
                                    </div>
                                    <input name="photo" type="text" defaultValue={singleCoffee.photo} placeholder="Enter Photo URL" className="input input-sm md:input-md w-full " />
                                </label>
                            </div>
                            <button className='bg-[#D2B48C] btn btn-sm w-full text-black font-semibold mt-5'>Update Coffee</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;