import React, { Component } from 'react';

const Programming = ({ data, toggle, handleToggle,handleCol }) => {
  return (
    <div className={`flex flex-${handleCol? 'col':'row flex-wrap'} justify-${handleCol? 'center':'around'}`}>
      {Object.keys(data.languages).map(el => (
        <div className="border rounded p-1 min-w-px-300 hover:border-2 hover:border-blue" keys={el}>
          <div>
            <div className={` ${el}-logo bg-fit`}>
              <div
                key={el}
                className={
                  'font-bold uppercase font-indie border justify-center hover:text-right hover:text-xl'
                }
              >
                {el}
              </div>
              <div>
                {data.languages[el].level.map(arr2 => (
                  <div
                    className="font-montserrat capitalize font-semibold"
                    key={arr2}
                  >
                    {arr2}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Projects
            language={el}
            data={data.languages[el].projects}
            handleToggle={handleToggle}
            toggle={toggle}
          />
        </div>
      ))}
    </div>
  );
};

export default Programming