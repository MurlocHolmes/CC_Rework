import React, { Component } from 'react';

export const SkillButtons = (props) => {
  const { skills, populateSkillDescription, active } = props;
  console.log(active);
  return (
    <div id="skill-list" className="skill-list skill-container col-lg-6 col-md-6 col-sm-12">
    	{Object.keys(skills).map((key) =>
    		<div id={key + "-block"} className={"skill-block col-md-4 col-sm-6 " + (active===key ? "active-skill" : "")}>
    			<button type="button" 
    				onClick={(e) => populateSkillDescription(key)}
    				className={"btn skill-code-" + skills[key].rating}>
    				<span className="button-text">{key}</span>
    			</button>
    		</div>
    	)}
	</div>
  )
}

export default SkillButtons;