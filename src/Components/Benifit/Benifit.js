import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'
const Benifit = (props) => {
    return (
        <div>

            <p className='flex'> <CheckCircleIcon className='text-green-500 w-6 h-6 mr-2'></CheckCircleIcon>
                {props.benifit}
            </p>
        </div>
    );
};

export default Benifit;