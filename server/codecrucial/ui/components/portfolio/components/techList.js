import React, { Component } from 'react';
export const TechList = (props) => {
    const { technologies } = props;
    const techList = Object.keys(technologies).map((key) => {
        const categoryList = technologies[key].map((tech) => (
            <li>
              {tech}
            </li>
        ));
        return (
            <div className={key + "-tech-wrapper"} >
                {key.toLowerCase()}
                <ul>
                    {categoryList}
                </ul>
            </div>
          );
      });
    return (
        <div className="tech-wrapper">
            TECHNOLOGIES:
            <div className="tech-list-wrapper">
                {techList}
            </div>
        </div>
    )
}

export default TechList;