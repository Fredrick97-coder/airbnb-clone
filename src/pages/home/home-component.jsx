import React, { useState } from 'react';
import Bottom from '../../components/bottom-tag/bottom';
import Places from '../../components/home/Grid/places';
import Navbar from '../../components/navbar-container';
import Overlay from '../../components/overlay';
import Rocket from '../../components/rocket';

function HomeComponent() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Navbar />
      <Overlay {...{ active, setActive }} />
      <div style={{ marginTop: '50px' }}>
        <Places />
        <Rocket {...{ setActive, active }} />
      </div>
      <Bottom />
    </div>
  );
}

export default HomeComponent;
