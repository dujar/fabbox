import React from 'react';

const styleDiv = "flex flex-row justify-between group-hover:text-white"

export const institution = data => (
  <div className={styleDiv}>
    <div className="font-bold text-left">Institution:</div>
    <div className="text-right hover:text-white">{data.institution}</div>
  </div>
);

export const major = data => (
  <div className={styleDiv}>
    <div className="font-bold text-left">Major:</div>
    <div className="text-right group-hover:text-white">
      <a href={data.website} target="_blank" rel="noopener noreferrer">
        {data.major}
      </a>
    </div>
  </div>
);
export const minor = data => (
  <div className={styleDiv}>
    <div className="font-bold text-left hover:text-white">Minor:</div> <div className="text-right">{data.minor}</div>
  </div>
);
export const location = data => (
  <div className={styleDiv}>
    <div className="font-bold text-left">Location:</div>
    <div className="text-right hover:text-white">{data.location}</div>
  </div>
);

export const country = data => (
  <div className={styleDiv}>
    <div className="font-bold text-left">Country:</div>{' '}
    <div className="text-right hover:text-white">{data.country}</div>
  </div>
);
export const thesis = data => (
  <div className={styleDiv}>
    <div className="font-bold text-left">Thesis:</div>{' '}
    <div className="text-right hover:text-white">
      <a href={data.thesis_url} target="_blank" rel="noopener noreferrer">
        {data.thesis}
      </a>
    </div>
  </div>
);

export const educationWrapper = `flex flex-col
                          justify-around
                          items-start
                          flex-wrap
                          p-2 mb-4`;