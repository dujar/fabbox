import React from 'react';
import {NavLink} from 'react-router-dom'
import FabGitHub from 'react-icons/lib/fa/github'
import FabHomeIcon from 'react-icons/lib/ti/home-outline'
import CVDownloadIcon from 'react-icons/lib/io/android-download'
import ReactTooltip from 'react-tooltip'
import About from './About'
const niceHover = "hover:border-blue hover:rounded hover:border-2 truncate"
const NavBar = props => {

  return (
    <div className={"flex flex-row justify-around mb-1 shadow min-w-full truncate"}>
      <div className={niceHover} data-tip="supposedly my home :)">
      <ReactTooltip />
      <NavLink to="/"><FabHomeIcon size={30}/></NavLink>
      </div>
      <div className={niceHover} data-tip="a few words to get to know me.">
      <ReactTooltip/>
      <NavLink to="/about">About</NavLink>
      </div>
      <div className={niceHover} data-tip="link to my github">
      <ReactTooltip />
      <a href="https://github.com/dujar" target="_blank"><FabGitHub size={30}/></a>
      </div>
      <div className={niceHover} data-tip="download my cv">
      <ReactTooltip />
      <NavLink to="/CV"><CVDownloadIcon size={30}/></NavLink>
      </div>
    </div>
  )
}

export default NavBar