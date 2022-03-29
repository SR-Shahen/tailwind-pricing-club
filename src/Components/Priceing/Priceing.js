import React from 'react';
import PriceingOption from '../PriceingOption/PriceingOption';

const Priceing = () => {
    const PriceingOptions = [
        {
            id: 1, name: "Free", price: 0, benifits: [
                "assome deals",
                "nice deals",
                "avilable deals",
                "good deals"
            ]
        },
        {
            id: 2, name: "Standard", price: 11.99,
            benifits: [
                "assome deals",
                "nice deals",
                "avilable deals",
                "good deals"
            ]
        },
        {
            id: 3, name: "Premium", price: 29.99,
            benifits: [
                "assome deals",
                "nice deals",
                "avilable deals",
                "good deals"
            ]
        }
    ]
    return (
        <div className='bg-blue-400 mt-8 p-5'>
            <h1 className='text-6xl mb-7 font-mono text-white'>Best Deals in this city</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis reprehenderit voluptatum, soluta facilis. Est assumenda temporibus consectetur dolorem.</p>

            <div className='md:grid grid-cols-3 gap-10'>
                {
                    PriceingOptions.map(option => <PriceingOption
                        key={option.id}
                        option={option}></PriceingOption>)
                }
            </div>

        </div>


    );
};

export default Priceing;