import React from 'react';
// import withModal from '../../containers/modal/withModal';
import picFab from '../../images/fabrice.jpeg';

import { StreamingMessage, StreamNumber } from './Utilities';

const Header = props => {
  return (
    <div className="flex flex-row hover:justify-center m-4 p-4 border-solid border rounded hover:border-blue hover:shadow-lg bg-red-light">
      <div>
        <img
          src={picFab}
          className="h-px-100 hover:rounded hover:border-red hover:border hover:shadow-lg truncate content-center"
          alt="something"
        />
      </div>

      <div className="flex flex-col w-px-350">
        <div className={'p-1 font-montserrat font-bold capitalize'}>
          Fabricio Dujardin <StreamNumber />
          <br />
          <StreamingMessage
            message={'Career Change from Finance to Full Stack Developer'}
            speed={200}
          />
        </div>
      </div>
    </div>
  );
};

// export default Header;
export default Header;
