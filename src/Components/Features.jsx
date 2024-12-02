import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
    const [features,setFeatures] = useState([])
    useEffect(()=>{
        fetch('/features.json')
        .then(res=>res.json())
        .then(data=>setFeatures(data))
    },[])
    console.log(features)
    return (
        <div className='bg-[#ECEAE3] py-6'>
            <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>
                {
                    features.map((feature,idx)=> <FeatureCard key={idx} feature={feature}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Features;