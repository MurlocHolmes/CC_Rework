import React, { Component } from 'react';
const PortfolioCarousel = (props) => {
    const projects = props.projects;
  return (
    <div id="portfolio-carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            {projects.map((key, index) =>
                <li className={(index == 0 ? "active" : "")} data-target="#portfolio-carousel" data-slide-to={index}></li>
            )}
        </ol>
        <div className="carousel-inner" role="listbox">
            {projects.map((project, index) =>
                <div className={"carousel-item " + (index == 0 ? "active" : "")}>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                </div>
            )}
        </div>
        <a className="carousel-control-prev" href="#portfolio-carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#portfolio-carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
	</div>
  )
}

export default PortfolioCarousel;


