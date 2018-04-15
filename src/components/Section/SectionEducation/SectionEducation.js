import React from 'react';
import data from './data_education';
import withModal from '../../../containers/modal/withModal';

const { bachelor, master } = data;

const institution = data => (
  <div className="flex flex-row flex-start">
    <div className="font-bold">Institution:</div>
    <div>{data.institution}</div>
  </div>
);

const major = data => (
  <div className="flex flex-row flex-start items-start">
    <div className="font-bold">Major:</div>
    <div className="">
      <a href={data.website} target="_blank">
        {data.major}
      </a>
    </div>
  </div>
);
const minor = data => (
  <div className="flex flex-row flex-start">
   <div className="font-bold">Minor:</div>{' '}
   <div className="">{data.minor}</div>
  </div>
)
const location = data => (
  <div className="flex flex-row flex-start">
    <div className="font-bold">Location:</div>
    <div className="">{data.location}</div>
  </div>
);

const country = data => (
  <div className="flex flex-row flex-start">
    <div className="font-bold">Country:</div>{' '}
    <div className="">{data.country}</div>
  </div>
);
const thesis = data => (
  <div className="flex flex-row flex-start">
    <div className="font-bold">Thesis:</div>{' '}
    <div className="">
      <a href={data.thesis_url} target="_blank">
        {data.thesis}
      </a>
    </div>
  </div>
);

const educationWrapper = `flex flex-col 
                          flex-start border 
                          rounded shadow shadow
                          w-px-400 h-px-150 
                          p-2 shadow-lg mb-4`
const Master = props => {
  return (
    <div className={educationWrapper}>
      <div className="flex flex-row flex-wrap">
        <div className="flex flex-col">
          {institution(master)}
          {major(master)}
          {location(master)}
          {country(master)}
        </div>
        <div className="erasmus-logo logo bg-fit bg-contain" />
      </div>
      {thesis(master)}
    </div>
  );
};

const MasterM = withModal(Master);
const premaster = data["pre-master"]
const PreMaster = props => {
  return (
    <div className={educationWrapper}>
      <div className="flex flex-row">
        <div>
          {institution(premaster)}
          {major(premaster)}
          {location(premaster)}
          {country(premaster)}
        </div>
        <div className="erasmus-logo logo bg-fit" />
      </div>
    </div>
  );
};
const PreMasterM = withModal(PreMaster);

const Bachelor = props => {
  return (
    <div className={educationWrapper}>
      <div>
        <div>
          {institution(bachelor)}
          {major(bachelor)}
          {minor(bachelor)}
          {location(bachelor)}
          {country(bachelor)}
        </div>
        <div className="mahidol-logo logo bg-fit" />
      </div>
    </div>
  );
};

const BachelorM = withModal(Bachelor);

const SectionEducation = props => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-bold font-indie text-xl  mb-25">
        Education
      </div>
      <div className="flex flex-wrap md:flex-row justify-around items-center">
      <div><MasterM /></div>
      <div><PreMasterM /></div>
      <div><BachelorM /></div>
      </div>
    </div>
  );
};

export default SectionEducation;
