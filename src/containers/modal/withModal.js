import React from 'react';
import { Animated } from 'react-animated-css';

const Container = Component => {
  class Modal extends React.Component {
    state = {
      toggle: false
    };
    render() {
      return this.state.toggle ? (
        <Animated
          animationIn="zoomInLeft"
          animationOut="zoomOutDown"
          isVisible={this.state.toggle}
        >
          <div
            className="
          flex
          items-center
          justify-center
          fixed
          pin
          p-4
          bg-grey-darker
          z-10
          animatepues
          overflow-hidden
          overflow-y-auto
          hover:opacity-50"
            onClick={() =>
              this.setState(prevState => ({ toggle: !prevState.toggle }))
            }
          >
            <div
              className="
            fixed
            rounded
            bg-green-lighter
            border-white
            border-4
            p-2
            z-20
            shadow-lg
            hover:shadow
            hover:border-blue-light
            hover:border-4
            "
            >
              <Component {...this.props} />
            </div>
          </div>
        </Animated>
      ) : (
        <div
          onClick={() =>
            this.setState(prevState => ({
              toggle: !prevState.toggle
            }))
          }
          className=""
        >
          <Component {...this.props} />
        </div>
      );
    }
  }
  return Modal;
};

Container.displayName = 'Modal';

export default Container;
