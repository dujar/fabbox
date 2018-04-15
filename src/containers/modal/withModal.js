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
          <div>
            <div
              className="w-full h-full opacity-25 bg-grey-darker pin z-10 absolute  hover:opacity-50"
              onClick={() =>
                this.setState(prevState => ({ toggle: !prevState.toggle }))
              }
            />
            <div
              className="
            flex
            flex-col
            justify-center
            fixed
            rounded
            bg-orange
            pin-modal
            md:pin-modal
            z-1050
            max-w-lg
            border-white
            border-4
            p-2
            shadow-lg
            hover:shadow
            hover:border-blue-light
            hover:border-4
            opacity-100
            "
            >
              <Component {...this.props} />
            </div>
          </div>
        </Animated>
      ) : (
        <div
          onClick={() =>
            this.setState(prevState => ({ toggle: !prevState.toggle }))
          }
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
