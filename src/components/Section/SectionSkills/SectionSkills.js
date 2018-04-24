import React, { Component } from 'react';
import data from './data_skills';
import withModal from '../../../containers/modal/withModal';

import SideProjects from './SideProjects';
import Programming from './Programming';

class SectionSkills extends Component {
  state = {
    toggle: '',
    col: false
  };
  handleToggle = language => {
    this.setState(prevState => ({
      ...prevState,
      toggle: language,
      col: !prevState.col
    }));
  };
  render() {
    return (
      <div className={`flex flex-col justify-center hover:bg-orange-light `}>
        <div className="font-bold font-indie text-xl self-center">
          {this.props.title}
        </div>

        <Programming
          data={data}
          toggle={this.state.toggle}
          handleToggle={this.handleToggle}
          handleCol={this.state.col}
        />
      </div>
    );
  }
}

export default SectionSkills;
