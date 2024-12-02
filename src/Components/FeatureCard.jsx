import React from 'react';

const FeatureCard = ({feature}) => {
    const {img,title,description} = feature
    return (
        <div>
            <img className='h-10 w-10' src={img} alt="" />
            <h2 className='text-2xl font-medium'>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;