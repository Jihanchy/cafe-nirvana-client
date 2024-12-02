import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLogo from '../assets/more/logo1.png'
const Navbar = () => {
    const links =
        <>
            <NavLink className={({ isActive }) => `hover:text-warning px-4 ${isActive ? 'text-warning' : ''}`} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => `hover:text-warning px-4 ${isActive ? 'text-warning' : ''}`} to='/addCoffee'>Add Coffee</NavLink>
            <NavLink className={({ isActive }) => `hover:text-warning px-4 ${isActive ? 'text-warning' : ''}`} to='/users'>Users</NavLink>
        </>
    return (
        <div className="navbar w-10/12 mx-auto text-white px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm text-lg text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="text-3xl  flex items-center gap-2"><span><img className='h-10 w-10' src={navLogo} alt="" /></span><span>Cafe Nirvana</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;