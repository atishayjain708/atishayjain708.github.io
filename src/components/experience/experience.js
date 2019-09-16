import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {
        <section id="experience">
        {/* Experience
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Viasat Inc. Chennai</h3>
                <p className="info">Software Development Intern<span>•</span> <em className="date">May 2019 - July 2019</em></p>
                <p>
                  Worked at <a href="www.viasat.com">Viasat Inc.</a> to develop a network traffic classifier that used Neural Netowrks to classify network traffic. The goal was to improve upon the current techniques that were slow and expensive and relying on decrypting data packets. Built the model for an LSTM that was able to successfully classify packets into one of 7 classes: YouTube, Netflix, Amazon Prime, Spotify, Reddit, Wikipedia, PlayStation Gaming, and, Quora.
                </p>
              </div>
              <div className="twelve columns">
                <h3>Indian Institute of Information Technology, Allahabad</h3>
                <p className="info">Summer Research Intern<span>•</span> <em className="date">May 2018 - July 2018</em></p>
                <p>
                  Worked for 8 weeks under the guidance of Prof. Vrijendra Singh, HOD IT, IIIT-Allahabad. Created two projects based on time-series clustering and analysis. This involved an efficient, non-euclidean distance based algorithm for clustering. Used that algorithm to identify discords in large datasets. Created optimal mutual fund clusters to maximize returns.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Binomial Studios</h3>
                <p className="info">Testing and Quality Assistant<span>•</span> <em className="date">March 2017 - December 2018</em></p>
                <p>
                  Helped test and manage quailty in pre-alpha and alpha phase builds of a game being developed.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        </section>
      }
      </React.Fragment>
    );
  }
}