import React, { Component } from 'react';
import { WelcomeMat } from './welcomemat';
import { Profile } from '../../profile';
import { Portfolio } from '../../portfolio';
import { Contact } from '../../contact';

export const Home = (route) => {
  return (
    <div className="home-container container-fluid">
      <WelcomeMat welcomeMessage={route.welcomeMessage} />
      <hr />
      <Profile />
      <hr />
      <Portfolio />
    </div>
  )
}

export default Home;