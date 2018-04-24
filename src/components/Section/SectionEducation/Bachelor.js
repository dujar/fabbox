import React from 'react';

const Bachelor = props => {
  const {
    institution,
    major,
    minor,
    location,
    data,
    country,
    educationWrapper
  } = props;

  return (
    <div className={educationWrapper}>
      <div>
        <div>
          {institution(data)}
          {major(data)}
          {minor(data)}
          {location(data)}
          {country(data)}
        </div>
        <div className="mahidol-logo logo bg-fit" />
      </div>
    </div>
  );
};

export default Bachelor;
