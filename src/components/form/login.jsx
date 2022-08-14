import React, { useState } from 'react';
import './style.css';
import { VscClose } from 'react-icons/vsc';
import { FiChevronDown } from 'react-icons/fi';
import PhoneNumbers from '../numbers-dropdown/phone-numbers';
import { phones } from '../../model/phones';

export const Login = ({ setActive }) => {
  const [inputVal, setInputVal] = useState('');
  const [selected, setSelected] = useState(0);
  const [phoneDrop, setPhoneDrop] = useState(false);
  const [focus, setFocus] = useState(false);

  window.addEventListener('click', (e) => {
    if (focus === true && e.target.id !== 'phone__input') {
      return setFocus(false);
    }
  });

  return (
    <div className="form__wrapper">
      <div className="card">
        <div className="header">
          <span
            className="login__close__svg"
            onClick={() => setActive((prev) => !prev)}
          >
            <VscClose size={20} />
          </span>
          <h3>Log in or Sign up</h3>
        </div>
        <div className="body">
          <h3>Welcome to Airbnb Clone</h3>
          <div className="phone__number__wrapper">
            {/* country code */}
            <div
              className="country__code"
              onClick={() => setPhoneDrop(!phoneDrop)}
            >
              <div className="code__container">
                <span>Country/Region</span>
                <span>
                  {phones[selected].country} ({phones[selected].code})
                </span>
              </div>
              <FiChevronDown
                size={20}
                onClick={() => setPhoneDrop(!phoneDrop)}
              />
            </div>
            {phoneDrop && <PhoneNumbers {...{ setSelected }} />}
            <div className="divier" />
            {/* phone number */}
            <div className="phone__number">
              {inputVal.length > 0 || focus === true ? (
                <span>{phones[selected].code}</span>
              ) : null}
              <input
                id="phone__input"
                type="text"
                onChange={(e) => setInputVal(e.target.value)}
                onFocus={() => setFocus(true)}
              />
              <label className={inputVal !== '' ? 'isNotEmpty' : null}>
                Phone number
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
