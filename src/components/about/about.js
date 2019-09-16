import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profile.jpeg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Hi, I am Atishay Jain - a Computer Science engineering Final year student. I am greatly interested in computer science and finance.
              in the field of development, I have experience with languages such as Python, Java, Javascript, C++, and basic HTML/CSS. I have also had some experience using tools and frameworks such as Tensorflow, ReactJS, Docker and AWS. Currently I’m working in and increasing my knowledge of the machine learning and data-science domain, focussing specifically on deep learning and neural networks.
            </p>
          </div> {/* end .main-col */}
        </div>
      </section> 
      }
      </React.Fragment>
    );
  }
}