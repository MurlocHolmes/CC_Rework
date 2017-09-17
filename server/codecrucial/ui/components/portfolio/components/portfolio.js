import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from './carousel';
import ProjectNav from './projectnav';
import '../styles.scss';
import { initial_projects } from "./_projectdata";
import { incrementPosition, initializePosition, setProjects } from './redux/actions';

export class Portfolio extends Component {

	constructor(props) {
	  	super(props);
	  	this.getCardStyle = this.getCardStyle.bind(this);
	  	this.checkAndIncrementPosition = this.checkAndIncrementPosition.bind(this);
    	this.props.initializePosition(initial_projects.length - 3);
    	this.props.setProjects(initial_projects);
	}

	getCardStyle(index) {
		const { position } = this.props;
	    const offset = index-position;
	    const visible = (-1 < offset && offset < 3 ? 1 : 0);
	    const cardStyle = {
	        marginLeft:offset*(100/3)+"%", 
	        opacity:visible
	    };
	    return cardStyle;
	}

	checkAndIncrementPosition(increment) {
		const { minPosition, maxPosition, position } = this.props;
		if(position+increment <= maxPosition && position+increment >= minPosition) {
			this.props.incrementPosition(increment);
		}
	}

	render() {
		const { projects, position } = this.props;
		if(projects === undefined) {
			return (
				<div className="section-container portfolio-container container-fluid">
					Please wait...
				</div>
			);
		}
		else {
			return (
				<div className="section-container portfolio-container container-fluid">
					<h6>
						Portfolio
					</h6>
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
		projects: state.portfolio_info.projects,
		position: state.portfolio_info.position,
		maxPosition: state.portfolio_info.maxPosition,
		minPosition: state.portfolio_info.minPosition
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

const ConnectedPortfolio = connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio)

export default ConnectedPortfolio;