import React, { Component } from 'react';
import PortfolioCarousel from './portfoliocarousel';

const Portfolio = () => {
  return (
    <div className="section-container portfolio-container container-fluid">
		<h6>
			<p>Portfolio.</p>
		</h6>
		<PortfolioCarousel projects={projects}/>
	</div>
  )
}

const projects = [
	{title: "AT&T Things", description: "AT&T things are fun and stuff, yay."},
	{title: "Implus Things", description: "Implus things are also fun and stuff, yay."},
	{title: "Personal Things", description: "Private things are the most fun and stuff, yay."},
	{title: "Another one", description: "DJ KAHLED, WE DA BESS"}
]
export default Portfolio;