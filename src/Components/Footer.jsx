import React from 'react';
import footerLogo from '../assets/more/logo1.png'
import { FaFacebook, FaInbox, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { FaLocationDot, FaMapLocation, FaPhoneFlip, FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
    return (
        <div className='w-9/12 mx-auto py-14 grid grid-cols-1 md:grid-cols-2 items-center gap-20'>
            <div className='space-y-3'>
                <img className='h-10 w-10' src={footerLogo} alt="" />
                <h2 className='text-3xl font-semibold text-amber-900 pt-2'>Cafe Nirvana</h2>
                <p className='font-thin'>Always ready to be your friend.
                    Come & Contact with us to share your memorable moments,
                    to share with your best companion.</p>
                <div className='flex gap-2'>
                    <span className='text-amber-950'><FaFacebook /></span>
                    <span className='text-amber-950'><FaTwitter /></span>
                    <span className='text-amber-950'><FaInstagram /></span>
                    <span className='text-amber-950'><FaLinkedin /></span>
                </div>
                <h2 className='text-3xl font-semibold text-amber-900 pt-2'>Get in Touch</h2>
                <div>
                    <p className='flex gap-2 items-center'><span className='text-amber-950'><FaPhoneVolume /></span><span>+88 01533 333 333</span></p>
                    <p className='flex gap-2 items-center'><span className='text-amber-950'><MdEmail /></span><span>+88 01533 333 333</span></p>
                    <p className='flex gap-2 items-center'><span className='text-amber-950'><FaLocationDot /></span><span>+88 01533 333 333</span></p>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-amber-900 pb-4'>Connect With Us</h2>
                <div className='flex flex-col gap-3'>
                    <input type="text" placeholder="Name" className="input  rounded-none input-sm w-full max-w-xs" />
                    <input type="email" placeholder="Email" className="input rounded-none  input-sm w-full max-w-xs" />
                    <textarea className="textarea max-w-xs" placeholder="message"></textarea>
                </div>
                <button className='btn btn-sm text-amber-900 mt-4 rounded-xl border-amber-900'>Send message</button>
            </div>
        </div>
    );
};

export default Footer;