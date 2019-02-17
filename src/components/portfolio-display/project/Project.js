import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Project.css';


export class Project extends Component {

  // Place medals next to the first and second place skills
  rankSkill = (i) => {
    let first = <span role='img' aria-label='First place' className='rank-1'>&#129351;</span>;
    let second = <span role='img' aria-label='Second place' className='rank-2'>&#129352;</span>;
    let third = <span role='img' aria-label='Third place'>&#x1F949;</span>;
    let rank = '';
    switch (i) {
      case 0:
        rank = first;
        break;
      case 1:
        rank = second;
        break;
      case 2:
        rank = third;
        break
      default:
        break
    }
    return rank;
  }

  render() {
    const {name, imgSrc, skills, component} = this.props.project // Destructure
    return (
      <div className='project-tile'>
        <div className='tile-info'> 
          <h2>{name}</h2>
          <span className='center-content'>
            <img src={imgSrc} alt='Project preview'/>
          </span>
          <h2>Technologies used:</h2>
          <div className='center-content'>
            <ul className='skills-list'>
              {skills.map((skill, i) => (
                <li key={i}>
                  {i + 1} - {' '} 
                  {skill}
                  {this.rankSkill(i)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='tile-demo'>
          <button className='btn-source'>Code</button>
          <button className='btn-demo' onClick={this.props.demoClick.bind(this.props.demoClick, component)}>Demo</button>
        </div>
      </div>
    )
  }
}

// Require prop types
Project.propTypes = {
  project: PropTypes.object.isRequired,
  demoClick: PropTypes.func.isRequired
}

export default Project;
