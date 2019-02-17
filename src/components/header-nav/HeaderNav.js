import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Resume from './Resume.pdf';
import IconDownload from './icon-download.png';
import './HeaderNav.css';

// Variables for scroll event listener
let navScrollY = 0;
let navScrollTicking = false;

export class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerStyle: 'site-header absolute-header',
      menuOpen: false
    }
  }

  // Scroll event listener
  handleScroll = () => {
    navScrollY = window.scrollY;
    if (!navScrollTicking) {
      window.requestAnimationFrame(() => {
        this.scrollListener.current.style.top = `${navScrollY}px`;
        navScrollTicking = false;
      });
      navScrollTicking = true;
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  scrollListener = React.createRef(); 
  

  // Toggle header style for animations
  toggleHeader = () => {
    let style = this.state.headerStyle;
    
    if (window.innerWidth <= 760) {
      this.openMenu();
      this.setState({ headerStyle: 'site-header sticky-header'})
    } 
    else {
      // Alter the changes slightly if scrolled past 85px      
      if (navScrollY < 85) {
        switch (style){
          case 'site-header absolute-header':
            this.setState({ headerStyle: 'site-header sticky-header visible-header'})
            break;
          case 'site-header sticky-header visible-header':
            this.setState({ headerStyle: 'site-header sticky-header'})
            break;
            case 'site-header sticky-header':
            this.setState({ headerStyle: 'site-header sticky-header visible-header'})
            break;
          default:
            break;
        }
      } 
      else {
        switch (style) {
          case 'site-header absolute-header':
            this.setState({ headerStyle: 'site-header sticky-header'})
            break;
          case 'site-header sticky-header':
            this.setState({ headerStyle: 'site-header sticky-header visible-header'})
            break;
          case 'site-header sticky-header visible-header':
            this.setState({ headerStyle: 'site-header sticky-header'})
            break;
          default:
            break;
        }
      }
      

      if (this.state.menuOpen === true) {
        this.setState({ menuOpen: false })
      }
    }
  }

  // Handle menu button click
  openMenu = () => {
    let status = !this.state.menuOpen ? true : false
    this.setState({ menuOpen: status })
  }

  render() {
    let header = (window.innerWidth <= 760) ? 'site-header sticky-header' : this.state.headerStyle
    let menu = this.state.menuOpen ? 'open-menu' : 'closed-menu'
    let btnMenu = this.state.menuOpen ? 'rotate' : ''

    return (
      <div>
        <header className={header}>
          <div className='container'>
            
            <h1><em><span>Hire</span> Joel!</em></h1>

            <div className='nav-component'>
              <nav ref={this.scrollListener}>
                <div className='menu-div' onClick={this.openMenu}>
                  <span><div className={btnMenu}>&#187;</div>Menu</span>
                </div>

                <ul className={menu}>
                  <li ><Link to='about-me' 
                    activeClass='active-link'
                    spy={true}
                    smooth={true}
                    offset={-85}
                    duration={500}> About Me </Link>
                  </li>
                  <li><Link to='portfolio-link' 
                    activeClass='active-link'
                    spy={true}
                    smooth={true}
                    offset={-160}
                    duration={500}> Portfolio </Link>
                  </li>
                  <li>
                  <Link to='contact-me' 
                    activeClass='active-link'
                    spy={true}
                    smooth={true}
                    offset={-290}
                    duration={500}> Contact Me </Link>
                  </li>
                  <li className='resume-download'>
                    <a href={Resume} download>
                    Resume <img src={IconDownload} alt='download' />
                    </a>
                  </li>
                </ul>

              </nav>
            </div> 
          </div>
        </header>
        <div className='nav-effects-wrapper' onClick={this.toggleHeader}>
          <div className='sticky-nav'>
            <span></span>
            {/* Detach animation is disabled because css filter breaks fixed positioning unless placed in html */}
            {/* <svg>
              <defs>
                <filter id='nav-detach-animation'>
                  <feGaussianBlur in='SourceGraphic' 
                    stdDeviation='5' 
                    result='blurResult'/>
                  <feColorMatrix in="blurResult"
                    result='matrixResult'
                    type="matrix"
                    values=".21 0 0 0 0
                            0 .26 0 0 0
                            0 0 .29 0 0
                            0 0 0 18 -6" />
                  <feBlend in='SourceGraphic' in2='matrixResult' />
                </filter>
              </defs>
            </svg> */}
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;