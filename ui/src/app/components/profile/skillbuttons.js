import React, { Component } from 'react';

const SkillButtons = (props) => {
	const { skills, populateSkillDescription } = props;
  return (
    <div id="skill-list" className="skill-list skill-container col-lg-6 ">
    	{Object.keys(skills).map((key) =>
    		<div id={key + "-block"} className={"skill-block col-lg-4"}>
    			<button type="button" 
    				onClick={(e) => populateSkillDescription(key)}
    				className={"btn btn-secondary skill-code-" + skills[key].rating}>
    				{key}
    			</button>
    		</div>
    	)}
	</div>
  )
}

export default SkillButtons;