import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, CheckCircleIcon } from '@heroicons/react/solid'
import Benifit from '../Benifit/Benifit';

const PriceingOption = (props) => {
    const { name, price, benifits } = props.option;
    return (
        <div className='bg-white m-4 p-3 rounded-lg'>
            <h1 className='text-3xl font-bold bg-blue-400 text-white rounded-lg p-4 m-4'>{name}</h1>
            <p> <span className='text-6xl mt-5 font-bold'>{price}</span>
                <span className='font-bold text-xl text-gray-600'>/mo</span>
            </p>
            <div>
                <h1 className='text-2xl text-left'>Benifits</h1>
                {
                    benifits.map(benifit => <Benifit benifit={benifit}></Benifit>)
                }

            </div>
            <button className='bg-green-500 flex w-full justify-center text-white font-bold text-xl hover:text-green-700 p-2 rounded-lg mt-5'>Buy Now
                <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PriceingOption;