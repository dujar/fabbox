import React from 'react';
import withModal from '../../../containers/modal/withModal';

const Master = props => {
  const {
    institution,
    major,
    minor,
    thesis,
    location,
    data,
    country,
    educationWrapper
  } = props;
  return (
    <div className={educationWrapper}>
      <div className="flex flex-row flex-wrap">
        <div className="flex flex-col">
          {institution(data)}
          {major(data)}
          {location(data)}
          {country(data)}
        </div>
        <div className="erasmus-logo logo bg-fit bg-contain" />
      </div>
      {thesis(data)}
    </div>
  );
};

export default Master;
