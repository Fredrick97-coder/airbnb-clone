import React from 'react';
import { Login } from '../form/login';
import './overlay.css';

function Overlay({ active, setActive }) {
  const height = window.innerHeight;
  return (
    <React.Fragment>
      {active && (
        <div className="overlay__wrappper" style={{ height: height }}>
          <Login {...{ setActive }} />
        </div>
      )}
    </React.Fragment>
  );
}

export default Overlay;
