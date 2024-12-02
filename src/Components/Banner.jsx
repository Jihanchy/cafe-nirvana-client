import React from 'react';

const Banner = () => {
    return (
        <div className='bg-banner_img py-40 bg-cover bg-center'>
            <div className='text-white w-9/12 mx-auto flex justify-end'>
                <div className='w-3/6 space-y-3'>
                <h2 className='font-medium text-4xl'>Would you like a Cup of Delicious Coffee?</h2>
                <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!
                     Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                     <button className='px-4 py-1 btn btn-sm rounded-none bg-[#E3B577] text-black hover:text-white hover:bg-transparent'>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;