import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {      <section id="about">
        <div className="row">
          <div className="three columns">
          <h1><span>About Me</span></h1>
          <img className="profile-pic" src="images/profile.jpeg" alt />
          </div>
          <div className="nine columns main-col">
            <p>Hi, I am Atishay Jain - a Computer Science engineering Final year student. </p>
            <p> My first experience with programming was in class 8th in school. Ever since, I have been building upon my love for coding; from writing basic programs in Java back in school to Android development, using React, Python scripts and several other tools and frameworks today. I am greatly interested in computer science and finance.
              in the field of development, I have experience with languages such as Python, Java, Javascript, C++, and basic HTML/CSS. I am well-versed with the concepts of OOPS and also have experience with Android Development. Infact, an app <span><a href="https://play.google.com/store/apps/details?id=garbagecollectors.com.unipool">Unipool</a></span> that I worked on, as part of a team, is up on the Play Store.I have also had some experience using tools and frameworks such as Tensorflow, ReactJS, Docker and AWS. Currently I’m working in and increasing my knowledge of the machine learning and data-science domain, focussing specifically on deep learning and neural networks.
            </p>
          </div> {/* end .main-col */}
        </div>
      </section> 
      }
      </React.Fragment>
    );
  }
}