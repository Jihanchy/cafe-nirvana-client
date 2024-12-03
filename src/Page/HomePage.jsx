import React from 'react';
import Banner from '../Components/Banner';
import Features from '../Components/Features';
import OurPopularProduct from '../Components/OurPopularProduct';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
    const coffees = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <OurPopularProduct coffees={coffees}></OurPopularProduct>
        </div>
    );
};

export default HomePage;