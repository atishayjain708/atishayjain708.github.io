import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {<header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#experience">Experience</a></li>
            <li><a className="smoothscroll" href="#education">Education</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#skills">Skills</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Atishay Jain.</h1>
            <h3>I'm a junior year student at <span>Shiv Nadar University</span>, majoring in <span>Computer Science and Engineering</span>. I have undertaken projects revolving around frameworks like <span>React, Node and MongoDB</span>. Currently, I'm working on projects in <span>Deep Learning</span> and <span>Data Mining</span>. Start scrolling to learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="http://facebook.com/Atishay5"><i className="fa fa-facebook" /></a></li>
              <li><a href="http://www.twitter.com/_atishayJain"><i className="fa fa-twitter" /></a></li>
              <li><a href="http://www.linkedin.com/in/atishay5"><i className="fa fa-linkedin" /></a></li>
              <li><a href="http://instagram.com/_atishay.jain"><i className="fa fa-instagram" /></a></li>
              {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li> */}
              {/* <li><a href="#"><i className="fa fa-skype" /></a></li> */}
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>}
      </React.Fragment>
    );
  }
}
