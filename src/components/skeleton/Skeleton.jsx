import React from 'react';
import './skeleton.css';
import { CircularProgress } from '@material-ui/core';
import { places } from '../../model/places';

export default function Skeleton({ type }) {
  const COUNTER = places.length;
  const PlaceSkeleton = () => (
    <div className="postSk">
      <div className="postSkImg"></div>
      <div className="postSkInfo">
        <div className="postSkDetail">
          <div className="postSkText">
            <div className="postSkText postSkName"></div>
            <div className="postSkText lg"></div>
            <div className="postSkText md"></div>
            <div className="postSkText sm"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const TopSkeleton = () => (
    <div className="topSk">
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkImg"></div>
    </div>
  );

  const MenuSkeleton = () => (
    <div className="menuSk">
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
    </div>
  );

  const Circle = () => (
    <div className="circle">
      <CircularProgress />
    </div>
  );

  const CustomLoading = () => (
    <div className="custom">
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <span className="customText">Loading...</span>
    </div>
  );

  if (type === 'places') return Array(COUNTER).fill(<PlaceSkeleton />);
  if (type === 'top') return <TopSkeleton />;
  if (type === 'menu') return <MenuSkeleton />;
  if (type === 'circle') return <Circle />;
  if (type === 'custom') return <CustomLoading />;
}
