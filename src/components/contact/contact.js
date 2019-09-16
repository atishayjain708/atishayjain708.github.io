import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/* Contact Section
   ================================================== */}
   
      <section id="contact">
      <div className="row education">
          <div className="three columns header-col">
            <h1><span>Get in Touch!</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Atishay Jain</h3>
                <p className="info">Student, Shiv Nadar University </p>
                <h2><p className="address">
                <h2>Phone: +91-8791355940</h2><br/>
                <h2>Email: <br/> atishayjain708@gmail.com<br/>
                  aj771@snu.edu.in<br/></h2>
                <h2>Address: <br/>Shiv Nadar University<br/>
                    Gautam Buddha Nagar, UP - 203207.
                  <br/></h2>
                </p></h2>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
      {/* <div className="row">
              <div className="columns contact-details">
                <h1>Contact Details</h1>
                <h2><p className="address">
                  <h2>Atishay Jain</h2><br />
                  <h2>Shiv Nadar University<br/>
                    Gautam Buddha Nagar, UP - 203207.
                  </h2><br />
                  <h2>+91-8791355940</h2><br/>
                  <span>atishayjain708@gmail.com</span><br/>
                  <span>aj771@snu.edu.in</span><br/>

                </p></h2>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> end row */}
            {/* </div> End 3 columns */}
        {/* <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">
            Want to get in touch? Feel free to reach out to me on my email address!
            </p>
          </div>
          <center className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                  <span>Atishay Jain</span><br />
                  <span>Shiv Nadar University<br/>
                    Gautam Buddha Nagar, UP - 203207.
                  </span><br />
                  <span>+91-8791355940</span><br/>
                  <span>atishayjain708@gmail.com</span><br/>
                  <span>aj771@snu.edu.in</span><br/>

                </p>
            </div> */}
            {/* <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b><a href="#">2 Days Ago</a></b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b><a href="#">3 Days Ago</a></b>
                </li>
              </ul>
            </div> */}
          {/* </center> */}
        {/* </div> */}
      </section> {/* Contact Section End*/}
      </React.Fragment>
    );
  }
}