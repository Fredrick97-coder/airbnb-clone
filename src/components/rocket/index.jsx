import React from 'react';
import './rocket.css';
import { GoRocket } from 'react-icons/go';

function Rocket({ setActive, active }) {
  const handleClick = () => {
    let rocket = document.getElementById('rock__wrap');
    rocket.classList.add('rocket-hide-animation');
    setTimeout(() => {
      setActive(true);
    }, 500);
  };

  return (
    <React.Fragment>
      {!active && (
        <div
          className="rocket__wrapper"
          id="rocket-container"
          onClick={handleClick}
        >
          <div className="login">Get started</div>
          <span id="rock__wrap">
            <GoRocket size={20} id="rocket" />
          </span>
        </div>
      )}
    </React.Fragment>
  );
}

export default Rocket;
