import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center py-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-md shadow-2xl">
                <form className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-black text-lg bg-[#D2B48C]">Login</button>
                        <p className='font-semibold mt-2 text-center'>New to this website , please <span className='text-[#D2B48C]'><Link to='/register'>Sign up</Link></span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;