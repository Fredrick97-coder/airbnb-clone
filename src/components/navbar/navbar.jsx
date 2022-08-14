import React from 'react';
import logo from '../../assets/logo/logo.png';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsGlobe2 } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';
import { BsPersonCircle } from 'react-icons/bs';
import './navbar.css';

const navbar = () => {
  return (
    <main className="navbar__wrapper">
      {/* logo */}
      <div>
        <img src={logo} alt="" className="logo" />
      </div>
      {/* search input */}
      <div className="navbar__middle__wrapper">
        <span className="middle__text">
          Anywhere
          <div className="divider" />
        </span>
        <span className="middle__text">
          Any week
          <span className="divider" />
        </span>
        <span className="middle__text">Add guest</span>
        <span className="search__wrapper">
          <BiSearchAlt2 color="white" />
        </span>
      </div>

      {/* right side */}
      <div className="navbar__left__wrapper">
        <p>Become a Host</p>
        <BsGlobe2 className="icon" />
        <div className="profile__wrapper">
          <GoThreeBars />
          <BsPersonCircle />
        </div>
      </div>

      <div className="mobile__screen__navbar">
        <div className="left__side">
          <BiSearchAlt2 color="darkgray" size={20} />
          <div className="list">
            <div className="where__to">Where to?</div>
            <div className="unordered__list">
              <li>Anywhere</li>
              <li>Any week</li>
              <li>Add guest</li>
            </div>
          </div>
        </div>
        <div className="zxsdfw">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: 'block',
              height: '16px',
              width: '16px',
              fill: '#222222',
            }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
        </div>
      </div>
    </main>
  );
};

export default navbar;
