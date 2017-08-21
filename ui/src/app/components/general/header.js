import React, { Component } from 'react';
import Navigation from './navigation';

const Header = ({pages, userName}) => (
  	<div className="site-header">
      <Navigation pages={pages} />
	  <div id="welcome-message">
          <p> Welcome, {userName} </p>
      </div>
    </div>
)

export default Header;


