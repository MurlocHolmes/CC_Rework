import React, { Component } from 'react';
import WelcomeMat from './welcomemat';
import Profile from './profile/profile';
import Portfolio from './portfolio/portfolio';
import Contact from './contact/contact';

const Home = (route) => {
  return (
    <div className="container-fluid">
      <WelcomeMat welcomeMessage={route.welcomeMessage} />
      <hr />
      <Profile />
      <hr />
      <Portfolio />
      <hr />
      <Contact />
    </div>
  )
}

export default Home;