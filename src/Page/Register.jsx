import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex justify-center items-center py-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-md shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-black text-lg bg-[#D2B48C]">Register</button>
                        <p className='font-semibold mt-2 text-center'>Already have an account , please <span className='text-[#D2B48C]'><Link to='/login'>Login</Link></span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;