import React, { Component } from 'react';
import SkillButtons from './skillbuttons';
import SkillDescription from './skilldescription';

export class Skillset extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    title: "Click a button on the left",
	    rating: "3",
	    description: "Click a button on the left for a description of the corresponding skill"
	  };
	  this.populateSkillDescription = this.populateSkillDescription.bind(this);
	}

	populateSkillDescription(skill) {
		const title = skill;
		const skillObject = Skills[skill];
		const { rating, description } = skillObject;
		const level = this.getLevel(rating);
		this.setState({
			title: title,
			level: level,
			description: description
		})
	}

	getLevel(rating) {
		switch(rating) {
			case 1:
				return 'Beginner';
			case 2:
				return 'Proficient';
			case 3:
				return 'Expert';
		}
	}

	render() {
		const { title, description, level } = this.state;
	  	return (
	  		<div className="container skill-wrapper">
		    	<SkillButtons skills={Skills} populateSkillDescription={this.populateSkillDescription}/>
		    	<SkillDescription title={title} description={description} level={level} />
			</div>
		);
	}
}

export default Skillset;

const Skills = {
					"React": {rating: 3, description: "React is cool"},
					"Javascript": {rating: 3, description: "Javascript is also cool"},
					"Python": {rating: 2, description: "Python is the coolest"},
					"Django": {rating: 2, description: "Django makes pythong easy"},
					"Bootstrap": {rating: 2, description: "Bootstrap makes CSS easy"},
					"HTML5": {rating: 3, description: "There's a ton of neat features"},
					"CSS3": {rating: 3, description: "There are also a ton of neat features"},
					"jQuery": {rating: 3, description: "Library for making javascript easy"},
					"Angular": {rating: 2, description: "Framework for the future"},
					"PHP": {rating: 3, description: "Language of the past"},
					"Laravel": {rating: 2, description: "Framework of the past's future"},
					"MySQL": {rating: 3, description: "Databases are the key to the heart"},
					"Docker": {rating: 3, description: "The whale is the best of all things"},
					"Jenkins": {rating: 3, desciption: "The butler to do all your things"},
					"Windows": {rating: 3, description: "The OS that tries the hardest"},
					"MacOS": {rating: 3, description: "The OS that feels the best"},
					"Linux": {rating: 2, description: "The OS that does the best"}
};