import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Carousel from './carousel';
import ProjectNav from './projectnav';
import '../styles.scss';
import { initial_projects } from "./_projectdata";
import { incrementPosition, initializePosition, setProjects } from './redux/actions';

export class Projects extends Component {

	constructor(props) {
	  	super(props);
	  	this.state = {
	  		windowWidth: 0,
	  		cardsOnScreen: 3
	  	};
	  	this.getCardStyle = this.getCardStyle.bind(this);
	  	this.checkAndIncrementPosition = this.checkAndIncrementPosition.bind(this);
    	this.props.initializePosition(initial_projects.length - this.state.cardsOnScreen);
    	this.props.setProjects(initial_projects);
    	this.updateWindowWidth = this.updateWindowWidth.bind(this);
	}

	componentDidMount() {
		this.updateWindowWidth();
		window.addEventListener('resize', this.updateWindowWidth);
	}

	updateWindowWidth() {
		//sm: 480px, md: 768px, lg: 1024px are breakpoints
		const windowWidth = window.innerWidth;
		let cardsOnScreen = 3;
		if(windowWidth < 769) {
			cardsOnScreen = 2;
		}
		if(windowWidth < 480 ) {
			cardsOnScreen = 1
		}
		this.setState({
			windowWidth: window.innerWidth,
			cardsOnScreen: cardsOnScreen
		});
    	this.props.initializePosition(initial_projects.length - cardsOnScreen);
	}

	getCardStyle(index) {
			const { position } = this.props;
		    const offset = index-position;
		    const visible = (-1 < offset && offset < 3 ? 1 : 0);
		    const cardStyle = {
		        marginLeft:offset*(100/this.state.cardsOnScreen) + '%', 
		        opacity:visible
		    };
		    return cardStyle;
	}

	checkAndIncrementPosition(increment) {
		const { minPosition, maxPosition, position } = this.props;
		if(position+increment <= maxPosition) {
			this.props.incrementPosition(increment);
		}
	}

	render() {
		const { projects, position } = this.props;
		if(projects === undefined) {
			return (
				<div className="section-container projects-container container-fluid">
					Please wait...
				</div>
			);
		}
		else {
			return (
				<div className="section-container row projects-container container-fluid">
					<div className="col-sm-12">
						<h4 className="section-header">
							These are some projects I've worked on.
						</h4>
					</div>
					<Carousel 
						{...this.props}
						getCardStyle={this.getCardStyle} 
						checkAndIncrementPosition={this.checkAndIncrementPosition} />

		            <ProjectNav 
		            	{...this.props} 
		            	checkAndIncrementPosition={this.checkAndIncrementPosition} />
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		projects: state.projects_info.projects,
		position: state.projects_info.position,
		maxPosition: state.projects_info.maxPosition,
		minPosition: state.projects_info.minPosition
	}
}

const mapDispatchToProps = dispatch => {
  return {
    incrementPosition: offset => {
      dispatch(incrementPosition(offset))
    },
    initializePosition: max => {
    	dispatch(initializePosition(max))
    },
    setProjects: projects => {
    	dispatch(setProjects(projects))
    },

  }
}

const ConnectedProjects = connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)

export default ConnectedProjects;