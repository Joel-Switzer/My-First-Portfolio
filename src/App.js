import React, { Component } from 'react';
import HeaderNav from './components/header-nav/HeaderNav';
import PortfolioDisplay from './components/portfolio-display/PortfolioDisplay';
import './App.css';

// Images & Icons
import Avatar from './images/other/avatar.png';
import IconHtml from './images/icons/icon-html5.png';
import IconCss from './images/icons/icon-css3.png';
import IconJs from './images/icons/icon-javascript.png';
import IconReact from './images/icons/icon-reactjs.png';
import IconMysql from './images/icons/icon-mysql.png';
import IconResponsive from './images/icons/icon-responsive.png';

class App extends Component {

  serveResume = () => {
    
  }

  render() {
    return (
      <div className="App">
        
        <HeaderNav serveResume={this.serveResume}/>


        <section id='about-me'>
          <div className="avatar-container">
            <div>
              <img src={Avatar} alt='Joel Switzer' />
            </div>
          </div>

          <div className='description'>
            <h1>Hi, I'm <span>Joel Switzer</span>, an aspiring web developer. <br />My skills include:</h1>
            <div className='skill-icons'>
              <div className='logo-box'>
                <div>
                  <h3>HTML5 Markup</h3>
                  <img src={IconHtml} alt='HTML5 Markup'></img>
                </div>
              </div>
              <div className='logo-box'>
                <div>
                  <h3>CSS3 Styling</h3>
                  <img src={IconCss} alt='CSS3 Styling'></img>
                </div>
              </div>
              <div className='logo-box'>
                <div>
                  <h3>JavaScript</h3>
                  <img src={IconJs} alt='JavaScript'></img>
                </div>
              </div>
              <div className='logo-box'>
                <div>
                  <h3>React.JS</h3>
                  <img src={IconReact} alt='React.JS'></img>
                </div>
              </div>
              <div className='logo-box'>
                <div>
                  <h3>MySQL</h3>
                  <img src={IconMysql} alt='MySQL Database'></img>
                </div>
              </div>
              <div className='logo-box'>
                <div>
                  <h3>Responsive Design</h3>
                  <img src={IconResponsive} alt='Responsive Design'></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id='my-portfolio'>
          <PortfolioDisplay />
        </section>
        <footer id='contact-me' className='footer-contact'>
          <p>Joel Switzer, Copyright &copy; 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
