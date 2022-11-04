import React from 'react';

const Quize = ({option, options, addToClickHandelar}) => {

    let optionNumber = options.indexOf(option) + 1;


    return (
        <div className='m-2 '>

            <label className='p-2 cursor-pointer'>
                
                <input onClick={()=> addToClickHandelar(option)} type="radio" name=""/><span className='p-2'>{optionNumber}: {option}
                </span>
            </label>
            


        </div>
    );
};

export default Quize;