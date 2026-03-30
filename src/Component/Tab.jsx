import React from 'react';

const Tab = ({ active ,setActive}) => {
  // console.log(active);
  return (
    <div className="tabs tabs-box justify-center items-center gap-4   mb-10 bg-amber-600 h-20">
      <input
        type="radio"
        name="my_tabs_1"
        className="tab rounded-2xl font-bold "
        aria-label="Models"
        onClick={() => setActive('Model')}
        defaultChecked
      />
      <input
        type="radio"
        name="my_tabs_1"
        className="tab rounded-2xl font-bold"
        aria-label="Cards"
        onClick={() => setActive('Cards')}
      />
    </div>
  );
};

export default Tab;
