import React from 'react';
import './bottom.css';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';

function Bottom() {
  return (
    <div className="bottom__wrapper">
      {/* left side */}
      <div className="left__bottom">
        <p>
          &copy; {''}
          {new Date().getFullYear()} {''}Airbnb, Inc.
        </p>
        <a href="/">• Privacy</a>
        <a href="/">• Terms</a>
        <a href="/">• Sitemap</a>
        <a href="/">• Destinations</a>
      </div>
      {/* right side */}
      <div className="right__bottom"></div>
      <div className="mobile__view__display">
        <span>
          <BiSearchAlt2 size={30} />
        </span>
        <span>
          <AiFillHeart size={30} />
        </span>
        <span>
          <IoPersonCircleSharp size={30} />
        </span>
      </div>
    </div>
  );
}

export default Bottom;
