import React from 'react';
import SideProjects from './SideProjects';

const Programming = ({ data, toggle, handleToggle, handleCol }) => {
  return (
    <div className={`flex flex-row justify-around flex-wrap`}>
      {Object.keys(data.languages).map(el => (
        <div
          className="flex flex-row border rounded p-1 hover:border-2 hover:border-blue m-2  flex-no-shrink flex-no-grow flex-1 hover:bg-yellow-dark md:flex-start"
          key={el}
        >
          <div
            className={`${el}-logo bg-fit image font-bold uppercase font-indie border hover:text-right hover:text-xl logo hover:bg-white hover:shadow-inner`}
          >
            {el}
          </div>
          <div className={`flex flex-col flex-1 justify-around`}>
            {data.languages[el].level.map(arr2 => (
              <div
                className="font-montserrat text-left capitalize font-semibold text-purple-darker"
                key={arr2}
              >
                {arr2}
              </div>
            ))}
          </div>
          <SideProjects
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

export default Programming;
