import React, { Component } from 'react';
import { Welcome } from '../../welcome';
import { Profile } from '../../profile';
import { Projects } from '../../projects';
import { BucketList } from '../../bucketlist';

export const Home = (route) => {
  return (
    <div className="home-container container-fluid">
      <Welcome />
      <hr />
      <Profile />
      <hr />
      <Projects />
      <hr />
      <BucketList />
    </div>
  )
}

export default Home;