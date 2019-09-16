import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {
        <section id="skills">
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skills">
          <div className="three columns header-col">
          <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p><h2>
              My professional skills and current interests rated with respect to my relative proficiency in each.
              </h2></p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand eighty-five-bar" /><em>Data mining; Time-series analysis</em></li>
                <li><span className="bar-expand full-bar" /><em>OOPS; Java, Python, C++</em></li>
                <li><span className="bar-expand eighty-bar" /><em>Deep Learning & Neural Networks</em></li>
                <li><span className="bar-expand eighty-five-bar" /><em>Web Development</em></li>
                <li><span className="bar-expand seventy-bar" /><em>Android Development</em></li>
                <li><span className="bar-expand seventy-bar" /><em>Technical Analysis of stocks and similar instruments</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
        </section>
      }
      </React.Fragment>
    );
  }
}

