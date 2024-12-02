import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div className='font-rancho overflow-x-hidden'>
            {/* header */}
            <header className='bg-nav_img'><Navbar></Navbar></header>
            {/* dynamic content */}
            <Outlet></Outlet>
            {/* footer */}
            <section>
                <div  className='bg-footer_img'>
                <Footer></Footer>
                </div>
                <div className='bg-copyright_img text-center py-2'>
                    <h3 className='text-white'>Copyright Cafe Nirvana | All rights reserved</h3>
                </div>
            </section>
        </div>
    );
};

export default MainLayouts;