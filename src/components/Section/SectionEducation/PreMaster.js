import React from 'react';

const PreMaster = props => {
  const {
    institution,
    major,
    location,
    data,
    country,
    educationWrapper
  } = props;
  return (
    <div className={educationWrapper}>
      <div className="flex flex-row">
        <div>
          {institution(data)}
          {major(data)}
          {location(data)}
          {country(data)}
        </div>
        <div className="erasmus-logo logo bg-fit" />
      </div>
    </div>
  );
};

export default PreMaster;
