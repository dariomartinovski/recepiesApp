import React from 'react';
import Featured from '../components/Home/Featured';
import Popular from '../components/Home/Popular';
import Recodemndation from '../components/Home/Recomendation';

export default function Home() {
  return (
    <>
      <Popular />
      <Featured />
      <Recodemndation />
    </>
  )
}
