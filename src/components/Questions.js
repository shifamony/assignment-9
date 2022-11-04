import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuize from './SingleQuize';


const Questions = () => {

    const quizData = useLoaderData().data;

    const {logo, name, questions  } = quizData;


    const [newQuestion, setNewQuestion] =   useState(0);

    let start = newQuestion;
    let end = newQuestion + 1;



    return (
        <div className='bg-gray-200 py-20'>
            <div  className=' max-w-[1200px] m-auto flex flex-col items-center'>
            <h3 className='text-3xl font-bold  text-violet-700 font-serif'>Start Quiz of {name} </h3>  <img className='w-20' src={logo} alt="" /> 
            <p className='font-bold text-pink-700'>Total Question: {questions.length}</p>

            {
                questions.slice(start, end).map(ques => <SingleQuize ques={ques} setNewQuestion={setNewQuestion} newQuestion={newQuestion} name={name} questions={questions} key={ques.id}  ></SingleQuize>)
            }
            </div>
            

        </div>
    );
};

export default Questions;