import React from 'react';
import { HorizontalNavbar } from '../horizontal-navbar/horizontal-navbar';
import NavbarMain from '../navbar/navbar';
import './navbar_container.css';

function Navbar() {
  return (
    <div className="navbar__container">
      <NavbarMain />
      <HorizontalNavbar />
    </div>
  );
}

export default Navbar;
