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
            <p>
              My professional skills and current interests rated with respect to my relative proficiency in each.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand eighty-five-bar" /><em>Time-series data analysis</em></li>
                <li><span className="bar-expand full-bar" /><em>Programming: C, C++, Java, Python</em></li>
                <li><span className="bar-expand eighty-bar" /><em>Neural Networks</em></li>
                <li><span className="bar-expand eighty-five-bar" /><em>Web Development</em></li>
                <li><span className="bar-expand seventy-bar" /><em>Android Development</em></li>
                <li><span className="bar-expand seventy-bar" /><em>Algorithms and Mathematical Modeling</em></li>
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

