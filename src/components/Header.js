import React from 'react';
import withModal from '../containers/modal/withModal';
import EyeViewIcon from 'react-icons/lib/ti/eye-outline';
import picFab from '../images/fabrice.jpeg';
import { Observable } from 'rxjs';
import config from 'recompose/rxjsObservableConfig';

import { setObservableConfig, componentFromStream } from 'recompose';

setObservableConfig(config);

const StreamNumber = componentFromStream(props$ => {
  let initialNumber = Math.ceil(Math.random() * 100);
  return Observable.interval(300).map(i => (
    <div>
      {initialNumber + i}
      <EyeViewIcon /> Desired Traffic
    </div>
  ));
});

const Header = props => {
  return (
    <div className="flex flex-row mb-1 sm:flex-center md:flex-end shadow">
      <div className={'flex flex-row border-solid border rounded'}>
        <img
          src={picFab}
          className="h-px-100 hover:rounded hover:border-blue hover:border hover:shadow-lg truncate"
        />
        <div className="flex flex-col w-px-350">
          <div className={'p-1 font-montserrat font-semibold'}>
            Fabricio Dujardin <StreamNumber />
            <br />
            Career Change from Finance to Front End Developer<br />
            Want to be FullStack Developer<br />
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Header;
export default withModal(Header);
