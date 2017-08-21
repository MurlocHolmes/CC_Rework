import React, { Component } from 'react';

const SkillDescription = (props) => {
	const { title, level, description } = props;
	return (
	    <div id="skill-description" className="skill-description skill-container col-lg-6 ">
	    	<h1>{title}</h1>
	    	<h5>{level}</h5>
	    	<p>{description}</p>
		</div>
	)
}

export default SkillDescription;