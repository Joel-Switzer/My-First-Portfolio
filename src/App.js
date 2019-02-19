import React, { Component } from 'react';
import HeaderNav from './components/header-nav/HeaderNav';
import PortfolioDisplay from './components/portfolio-display/PortfolioDisplay';
import Waypoint from 'react-waypoint';
import './App.css';

// Resume
import Resume from './components/Resume.pdf';

// Images & Icons
import Avatar from './images/other/avatar.png';
import IconHtml from './images/icons/icon-html5.png';
import IconCss from './images/icons/icon-css3.png';
import IconJs from './images/icons/icon-javascript.png';
import IconReact from './images/icons/icon-reactjs.png';
import IconMysql from './images/icons/icon-mysql.png';
import IconResponsive from './images/icons/icon-responsive.png';
import IconDownload from './images/icons/icon-download-green.png';
import IconGithub from './images/icons/icon-github.png';
import IconEmail from './images/icons/icon-email.png';
import IconPhone from './images/icons/icon-phone.png';
import IconLinkedin from './images/icons/icon-linked-in.png';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationTriggered: false
    }
  }
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
              }, 310);
            }, 310);
          }, 310);
        }, 310);
      }, 310);
    }, 3600);
  }

    // Contact info animations
    contactAnimation = () => {
      const a1 = document.getElementById('my-email'), 
        a2 = document.getElementById('my-phone'),
        a3 = document.getElementById('my-github'),
        a4 = document.getElementById('my-linkedin'),
        resume = document.getElementById('resume-download')

      if (!this.state.animationTriggered) {
        // resume download
        resume.classList.remove('no-display')
        resume.classList.add('contact-animation')
        window.setTimeout(() => { 
          resume.classList.remove('contact-animation')
          // email
          a1.classList.remove('no-display')
          a1.classList.add('contact-animation')
          window.setTimeout(() => { 
            a1.classList.remove('contact-animation')
            // phone
            a2.classList.remove('no-display')
            a2.classList.add('contact-animation')
            window.setTimeout(() => { 
              a2.classList.remove('contact-animation')
              // github
              a3.classList.remove('no-display')
              a3.classList.add('contact-animation')
              window.setTimeout(() => { 
                a3.classList.remove('contact-animation')
                // linkedin
                a4.classList.remove('no-display')
                a4.classList.add('contact-animation')
                window.setTimeout(() => { 
                  a4.classList.remove('contact-animation')
                }, 1100);
              }, 1100);
            }, 1100);
          }, 1100);
        }, 1100);

        // flag so animation doesn't re-trigger on scroll up
        this.setState({
          animationTriggered: true
        })
      }
    }

  render() {
    console.log("If you can see this you're awesome!")
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

        <section id='contact-me' className='footer-contact'>
        <h2 className='section-header'>CONTACT ME</h2>
        <hr />
          <Waypoint onEnter={this.contactAnimation} />
          <div className='social'>
            <div id='resume-download' className='no-display'>
              <a href={Resume} download>
                <img className='social-icon' src={IconDownload} alt='Resume Download' />
                <span>
                  Download
                  <br />
                  Resume
                </span>
              </a>
            </div>
            <div id='my-email' className='no-display'>
              <a href='mailto: Joelswitzer1@gmail.com' target='_blank' rel='noopener noreferrer'>
                <img className='social-icon' src={IconEmail} alt='Gmail icon' />
                <span id='email-address'>Email</span>
                <p>JoelSwitzer1@gmail.com</p>
              </a>
            </div>
            <div id='my-phone' className='no-display'>
              <img className='social-icon' src={IconPhone} alt='Phone icon' />
              <span>
                Phone 
                <br />
                <p>832-872-8899</p>
              </span>
            </div>
            <div id='my-github' className='no-display'>
              <img className='social-icon' src={IconGithub} alt='Github icon' />
              <a href='https://github.com/Joel-Switzer/' target='_blank' rel='noopener noreferrer'>
                <span>
                  GitHub 
                  <br />
                  <p>Github.com/Joel-Switzer/</p>
                </span>
              </a>
            </div>
            <div id='my-linkedin' className='no-display'>
              <img className='social-icon' src={IconLinkedin} alt='LinkedIn icon' />
              {/* <a href='#' target='_blank' rel='noopener noreferrer'> */}
                <span>
                  LinkedIn
                  <br />
                  <p>LINKEDIN LINK</p>
                </span>
              {/* </a> */}
            </div>
          </div>
        </section>
        <footer id='footer-copyright'>Joel Switzer, &copy; 2019</footer>
      </div>
    );
  }
}

export default App;
