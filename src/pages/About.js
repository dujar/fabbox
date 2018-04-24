import React, { Component } from 'react';
import Header from '../components/Header/Header';
import SectionSkills from '../components/Section/SectionSkills/SectionSkills';
import ElevatorPitch from '../components/SummaryDescription/ElevatorPitch';
import { Animated } from 'react-animated-css';
import SectionEducation from '../components/Section/SectionEducation/SectionEducation';

class Home extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center mx-2 shadow bg-green-lightest m-4">
        <div id="modal" />

        <Animated
          animationIn="bounceInUp"
          animationInDelay="1000"
          animationOut="fadeOut"
          isVisible={true}
        >
          <Header />
        </Animated>
        <Animated
          animationIn="bounceInDown"
          animationOut="fadeOut"
          isVisible={true}
        >
          <ElevatorPitch />
        </Animated>
        <Animated
          animationIn="bounceInRight"
          animationOut="fadeOut"
          isVisible={true}
        >
          <SectionSkills title={'Skills'} />
        </Animated>

        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <SectionEducation />
        </Animated>
      </div>
    );
  }
}

export default Home;
