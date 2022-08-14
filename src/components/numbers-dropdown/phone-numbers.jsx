import React from 'react';
import { phones } from '../../model/phones';
import './numbers.css';

const PhoneNumbers = ({ setSelected }) => {
  return (
    <section className="num__wrapper">
      {phones?.map((phone, index) => (
        <div
          className="num__item"
          key={phone.id}
          onClick={() => setSelected(index)}
        >
          <p>
            {phone.country} ({phone.code})
          </p>
        </div>
      ))}
    </section>
  );
};

export default PhoneNumbers;
