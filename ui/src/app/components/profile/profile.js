import React, { Component } from 'react';
import Skillset from './skillset';

const Profile = () => {
  return (
    <div className="section-container profile-container container-fluid">
		<h3>
			This is a list of some of the things I'm good at.
		</h3>
		<Skillset />
	</div>
  )
}

export default Profile;