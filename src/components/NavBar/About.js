import React from 'react';
import withModal from '../../containers/modal/withModal'

const About = props => {

  return(
    <div className="border-white border rounded p-2">
      <div className="font-indie font-bold text-blue">
      something sbout me</div>
      text that I write for the better me!
    </div>
  )
}

export default withModal(About)