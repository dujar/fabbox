import React from 'react';
import OpenArrow from 'react-icons/lib/md/keyboard-arrow-down';
import CloseArrow from 'react-icons/lib/md/keyboard-arrow-up';
import data from './data';
import withModal from '../../containers/modal/withModal';

class ElevatorPitch extends React.Component {
  state = {
    open: [false, false, false, false]
  };
  render() {
    return (
      <div className="relative rounded border mb-1 shadow p-2 max-w-px-450">
        {Object.keys(data).map((el, i) => {
          return (
            <div>
              <div className="font-merri">
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
                    className={'hover:bg-green-light'}
                  />
                ) : (
                  <CloseArrow
                    onClick={() =>
                      this.setState(state => {
                        let openEdited = state.open.slice();
                        openEdited[i] = !openEdited[i];
                        return { open: openEdited };
                      })
                    }
                    className={'hover:bg-red-light'}
                  />
                )}
              </div>
              {this.state.open[i] && (
                <div className={'text-center font-indie'}>
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

export default withModal(ElevatorPitch);
