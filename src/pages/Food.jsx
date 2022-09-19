import React, { useEffect, useState } from 'react';
import TrendingFood from '../components/Food/TrendingFood';
import RandomFood from '../components/Food/RandomFood';
import '../styles/Food.css';

export default function Food() {
  return (
    <>
      <RandomFood/>
      <TrendingFood/>
      <div className="wave wave1"></div>
    </>
  )
}
