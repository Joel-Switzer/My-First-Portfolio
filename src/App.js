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
import IconDownload from './images/icons/icon-download.png';
import IconGithub from './images/icons/icon-github.png';
import IconEmail from './images/icons/icon-email.png';
import IconLinkedin from './images/icons/icon-linked-in.png';

class App extends Component {
  // Cascade skill animations
  skillCascade = () => {
    window.setTimeout(() => { 
      document.getElementById('s1').classList.remove('hidden')
      window.setTimeout(() => { 
        document.getElementById('s2').classList.remove('hidden')
        window.setTimeout(() => { 
          document.getElementById('s3').classList.remove('hidden')
          window.setTimeout(() => { 
            document.getElementById('s4').classList.remove('hidden')
            window.setTimeout(() => { 
              document.getElementById('s5').classList.remove('hidden')
              window.setTimeout(() => { 
                document.getElementById('s6').classList.remove('hidden')
              }, 300);
            }, 300);
          }, 300);
        }, 300);
      }, 300);
    }, 3500);
  }

  render() {
    this.skillCascade();
    return (
      <div className="App">
        
        <HeaderNav />

        <section id='about-me'>
          <div className="avatar-container">
            <img src={Avatar} alt='Joel Switzer' />
          </div>

          <div className='description'>
            <h1>Hi, I'm <span>Joel Switzer</span>, an aspiring web developer. <br />My skills include:</h1>
            <div id='skill-icons'>
              <div id='s1' className='logo-box hidden'>
                <div>
                  <h3>HTML5 Markup</h3>
                  <img src={IconHtml} alt='HTML5 Markup'></img>
                </div>
              </div>
              <div id='s2' className='logo-box hidden'>
                <div>
                  <h3>CSS3 Styling</h3>
                  <img src={IconCss} alt='CSS3 Styling'></img>
                </div>
              </div>
              <div id='s3' className='logo-box hidden'>
                <div>
                  <h3>JavaScript</h3>
                  <img src={IconJs} alt='JavaScript'></img>
                </div>
              </div>
              <div id='s4' className='logo-box hidden'>
                <div>
                  <h3>React.JS</h3>
                  <img src={IconReact} alt='React.JS'></img>
                </div>
              </div>
              <div id='s5' className='logo-box hidden'>
                <div>
                  <h3>MySQL</h3>
                  <img src={IconMysql} alt='MySQL Database'></img>
                </div>
              </div>
              <div id='s6' className='logo-box hidden'>
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
          <div className='social'>
            <div>
              <img className='social-icon' src={IconEmail} alt='Gmail icon' />
              <label>E-mail</label>
            </div>
            <div id='my-github'>
              <img className='social-icon' src={IconGithub} alt='Github icon' />
              <label>GitHub</label>
            </div>
            <div id='my-linkedIn'>
              <img className='social-icon' src={IconLinkedin} alt='LinkedIn icon' />
              <label>LinkedIn</label>
            </div>
          </div>
          <div className='footer-copyright'>Joel Switzer, Copyright &copy; 2019</div>
        </footer>
      </div>
    );
  }
}

export default App;
