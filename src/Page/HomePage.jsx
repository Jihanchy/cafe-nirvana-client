import React from 'react';
import Banner from '../Components/Banner';
import Features from '../Components/Features';
import OurPopularProduct from '../Components/OurPopularProduct';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
    const loadedCoffees = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <OurPopularProduct loadedCoffees={loadedCoffees}></OurPopularProduct>
        </div>
    );
};

export default HomePage;