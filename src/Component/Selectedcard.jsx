import React from 'react';

const Selectedcard = ({ card, setCard }) => {

  const delethandle = (item) => {
    const newcard = card.filter((c) => c.id !== item.id);
    setCard(newcard)
  }
  return (


    <div className="grid grid-cols-1">
      {card.length === 0 ? (
        <h1 className="text-center text-2xl font-bold">No card selected</h1>
      ) : (
        <div>
          <h2 className="font-bold text-center text-2xl mb-4">
            Your Cards({card.length})
          </h2>
          {card.map((item, index) => {
            return (
              <div
                className="flex justify-between items-center bg-blue-200 mb-3 rounded-2xl p-4"
                key={index}
              >
                <img className="h-30" src={item.image} alt="" />
                <h2>{item.title}</h2>
                <h2>Price ${item.price}/month</h2>
                <button className='btn' onClick={()=>delethandle(item)}>X</button>
              </div>
            );
          })}
          <h2 className="bg-green-900 text-white mb-4 text-center text-2xl font-semibold p-4 w-fit mx-auto rounded-2xl">
            Total Price : ${card.reduce((total, item) => total + item.price, 0)}
            /month
          </h2>
          <div className="text-center mb-4">
            <button onClick={()=>{setCard([])}} className="btn btn-secondary text-2xl p-6 rounded-2xl">
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selectedcard;