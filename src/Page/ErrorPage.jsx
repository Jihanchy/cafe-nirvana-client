import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import errorImg from '../assets/icons/404.gif'
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='font-rancho'>
            {/* header */}
            <header className='bg-nav_img'><Navbar></Navbar></header>
            <div className='text-center flex justify-center py-3'>
            <Link className=' flex gap-2 items-center'><span><FaArrowLeft/></span><span>Back to home</span></Link>
            </div>
            <div className='flex justify-center'>
                <img src={errorImg} alt="" />
            </div>
            {/* footer */}
            <section>
                <div className='bg-footer_img'>
                    <Footer></Footer>
                </div>
                <div className='bg-copyright_img text-center py-2'>
                    <h3 className='text-white'>Copyright Cafe Nirvana | All rights reserved</h3>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;