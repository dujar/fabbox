import React, { Component } from 'react';
import Routing from './Routing';

import SectionEducation from './components/Section/SectionEducation/SectionEducation';

class App extends Component {
  render() {
    return (
      <div>
        <div id="modal" />
        <Routing />
      </div>
    );
  }
}

export default App;
