import React, { use } from 'react';
import Showcards from './Showcards';

const Allcards = ({ data,card,setCard }) => {

  let dataset = use(data);
  // console.log(dataset);
  return (
    <div className='mb-10'>
      <div className='text-center mb-10 space-y-4'>
        <h1 className='font-bold text-2xl'>Choose your Ai Model</h1>
        <p>One subscribtion give you access to all frontand model</p>
      </div>
      <div className='grid grid-cols-3 gap-4 justify-center items-center '>
        {dataset.map((item, index) => {
          return (
            <div key={index}>
              <Showcards item={item} card={card} setCard={setCard}></Showcards>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allcards;