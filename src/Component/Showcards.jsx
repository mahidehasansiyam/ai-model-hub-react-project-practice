import React, { useState } from 'react';
import { toast } from 'react-toastify';




const Showcards = ({ item,card,setCard }) => {
  
  const [issub, setIssub] = useState("Subscribe Now");
  const setclickhandelsr = () => {
    setIssub("Subscribed")
    const isFound = card.find((f) => f.id === item.id);
    if (isFound) {
      toast.error("Already added to card")
      return;
    }

    setCard([...card, item])
    toast.success("Successfully add to card")
  }

  return (
    <div className='border-2 p-4 rounded-2xl space-y-3'>
      <img className='h-40 mx-auto' src={item.image} alt="image" />  
      <h2 className='text-2xl font-bold'>{item.title}</h2>
      <p>{item.description}</p>
      <p className='font-semibold'>Price: ${item.price}</p>
      <button onClick={setclickhandelsr} className='btn btn-error w-full rounded-2xl'>{ issub}</button>
    </div> 
  );
};

export default Showcards;