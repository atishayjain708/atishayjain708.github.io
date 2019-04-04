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
        </div> {/* End Work */}}
        </section>
      }
      </React.Fragment>
    );
  }
}