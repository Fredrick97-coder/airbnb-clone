import React, { useState } from 'react';
import './horizontal-navbar.css';
import { HorizontalNavbarLinks } from '../../model/horizontal-navbar';

export const HorizontalNavbar = () => {
  const [scroll, setScroll] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <div
      className={
        scroll === true
          ? 'horizontal__links__wrapper scrolled'
          : 'horizontal__links__wrapper'
      }
    >
      {HorizontalNavbarLinks.map((link) => (
        <div key={link.id} className="horizontal__link">
          <a href={link.path}>{link.icon}</a>
          <span>{link.name}</span>
        </div>
      ))}
    </div>
  );
};
