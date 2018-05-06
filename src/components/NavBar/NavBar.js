import React from 'react';
import { NavLink } from 'react-router-dom';
import FabGitHub from 'react-icons/lib/fa/github';
// import CVDownloadIcon from 'react-icons/lib/io/android-download';
import ReactTooltip from 'react-tooltip';
// import ProjectIcon from 'react-icons/lib/fa/keyboard-o';
const niceHover = 'hover:border-blue hover:rounded hover:border-2 truncate';
const NavBar = props => {
  return (
    <div
      className={
        'flex flex-row justify-around mb-1 shadow min-w-full truncate bg-blue-lightest'
      }
    >
      <div className={niceHover} data-tip="a few words to get to know me.">
        <ReactTooltip />
        <NavLink to="/about">About</NavLink>
      </div>
      <div className={niceHover} data-tip="link to my github">
        <ReactTooltip />
        <a
          href="https://github.com/dujar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FabGitHub size={30} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
