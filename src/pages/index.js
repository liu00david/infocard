import React from 'react';
import Landing from '../components/Landing';
import Infocard from '../components/Infocard';

const Home = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Landing />
      <Infocard />
    </>
  )
}

export default Home
