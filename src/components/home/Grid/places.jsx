import React, { useEffect, useState } from 'react';
import { places } from '../../../model/places';
import { AiFillStar } from 'react-icons/ai';

import './places.css';
import Skeleton from '../../skeleton/Skeleton';

function Places() {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setIsLoading(false);
    return places;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="places__wrapper">
      {isLoading ? (
        <Skeleton type="places" />
      ) : (
        places?.map((place) => (
          <div key={place?.id} className="grid__container">
            <img src={place?.image} alt="" />
            <div className="name_rating">
              <h2 className="name">{place?.name}</h2>
              <div className="rating">
                <span>
                  <AiFillStar />
                </span>
                <span>{place?.rating}</span>
              </div>
            </div>
            <h3 className="distance">{place?.distance} away</h3>
            <h3 className="distance">{place?.date} away</h3>
            <div className="price">{place?.price} night</div>
          </div>
        ))
      )}
    </section>
  );
}

export default Places;
