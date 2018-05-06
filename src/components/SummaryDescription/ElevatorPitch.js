import React from 'react';
import OpenArrow from 'react-icons/lib/md/keyboard-arrow-down';
import CloseArrow from 'react-icons/lib/md/keyboard-arrow-up';
import data from './data';
// import withModal from '../../containers/modal/withModal';
// import { StreamingMessage } from '../Header/Utilities';

class ElevatorPitch extends React.Component {
  state = {
    open: [false, false, false, false]
  };
  render() {
    return (
      <div className="relative rounded border mb-1 shadow-lg p-2 max-w-px-450 min-w-px-350 bg-orange-dark">
        {Object.keys(data).map((el, i) => {
          return (
            <div key={i}>
              <div className="font-merri capitalize font-semi-bold">
                {data[el].question}
                {!this.state.open[i] ? (
                  <OpenArrow
                    onClick={() =>
                      this.setState(state => {
                        let openEdited = state.open.slice();
                        openEdited[i] = !openEdited[i];
                        return { open: openEdited };
                      })
                    }
                    className="hover:bg-green-light text-right hover:rounded-full"
                  />
                ) : (
                  <CloseArrow
                    onClick={() =>
                      this.setState(state => {
                        let openEdited = this.state.open.slice();
                        openEdited[i] = !openEdited[i];
                        return { open: openEdited };
                      })
                    }
                    className={'hover:bg-red-light hover:rounded-full'}
                  />
                )}
              </div>
              {this.state.open[i] && (
                <div className={'text-center font-indie text-black p-4'}>
                  {data[el].answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ElevatorPitch;
