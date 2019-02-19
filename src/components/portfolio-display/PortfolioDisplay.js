import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import Project from './project/Project';
import Demo from './demo/Demo';
import './PortfolioDisplay.css';

// Project demos
import TodoListApp from '../../projects/TodoListApp/TodoListApp';
import CalculatorApp from '../../projects/CalculatorApp/CalculatorApp';

// Project preview images
import PreviewTodo from './images/todo-preview.png';
import PreviewCalc from './images/calculator-preview.png';
import PreviewThisWebsite from './images/this-website-preview.png';

export class PortfolioDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: '',
      showDemo: false,
      doorsTriggered: false,
      projects: [
        {
          id: 0,
          name: 'React.JS To-do List',
          component: <TodoListApp />,
          imgSrc: PreviewTodo,
          skills: [
            'React.JS',
            'HTML & CSS'
          ]
        },
        {
          id: 1,
          name: 'React.JS Calculator',
          component: <CalculatorApp />,
          imgSrc: PreviewCalc,
          skills: [
            'React.JS',
            'HTML & CSS',
            'Math.JS Library'
          ]
        },
        {
          id: 2,
          name: 'This Website',
          component: <h1>This website is the demo!</h1>,
          imgSrc: PreviewThisWebsite,
          skills: [
            'React.JS',
            'Responsive CSS',
            'HTML5'
          ]
        },
        {
          id: 100,
          name: 'Test Card',
          component: <h1>Test Card</h1>,
          imgSrc: '',
          skills: [
            'Testing',
            'More testing',
            'Even more testing'
          ]
        }
      ]
    }
  }


  // Load project and show/hide the demo modal
  demoClick = (component) => {
    this.setState({
      demo: component, 
      showDemo: true
    })
  }
  closeDemo = () => {
    this.setState({
      showDemo: false
    })
  }

  animateDoors = () => {
    if (!this.doorsTriggered) {
      // Trigger the animation
      document.getElementById('panel-left').classList.add('slide-left')
      document.getElementById('panel-right').classList.add('slide-right')
      // Toggle display on the doors once animation is finished
      window.setTimeout(() => { 
        document.getElementById('hide-doors').classList.add('door-wrapper-hidden')
      }, 3990);
    }
  }

  render() {

    return (
      <div>
        <h2 className='section-header clip-bottom'><em>MY PORTFOLIO</em></h2>
        
        <div id='hide-doors' className='door-wrapper'>
          <div className='door-panels'>
            <div id='panel-right'></div>
            <div id='panel-left'></div>
          </div>
        </div>

        <div id='portfolio-link' className='container'>
          <div className='portfolio-display'>
            <Demo content={this.state.demo} 
              show={this.state.showDemo} 
              closeDemo={this.closeDemo} />
            
            <div className='project-list'>
              <Waypoint onEnter={this.animateDoors}/>

              {this.state.projects.map((project, index) => (
                <Project key={index} 
                  project={project}
                  demoClick={this.demoClick} />
              ))}
            </div>
          </div>
        </div>

        <div className='section-header clip-top'></div>
      </div>
    )
  }
}

export default PortfolioDisplay;
