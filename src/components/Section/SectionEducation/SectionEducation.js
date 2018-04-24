import React from 'react';
import data from './data_education';
import * as utilityProps from './Utilities';
import Master from './Master';
import PreMaster from './PreMaster';
import Bachelor from './Bachelor';

const { bachelor, master } = data;
const premaster = data['pre-master'];

const eduClasses =
  'flex-1 rounded border border-2 min-w-px-250  max-w-px-350 shadow m-2 hover:shadow-lg min-h-px-225 overflow-hidden bg-blue-light bg-fit group';

const SectionEducation = props => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-bold font-indie text-xl  mb-25">Education</div>
      <div className="flex flex-wrap flex-row justify-around items-center hover:bg-orange-light">
        <div className={eduClasses + ' erasmus-logo hover:bg-green-dark'}>
          <Master {...utilityProps} data={master} />
        </div>
        <div className={eduClasses + ' erasmus-logo hover:bg-green-dark'}>
          <PreMaster {...utilityProps} data={premaster} />
        </div>
        <div className={eduClasses + ' mahidol-logo hover:bg-purple-dark'}>
          <Bachelor {...utilityProps} data={bachelor} />
        </div>
      </div>
    </div>
  );
};

export default SectionEducation;
