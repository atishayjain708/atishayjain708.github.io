import React, { Component } from 'react';
export default class Portfolio extends Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://cdn.jsdelivr.net/github-cards/latest/widget.js";
    script.async = true;

    document.body.appendChild(script);
}

  render() {
    return (
      <React.Fragment>
      {
        <section id="portfolio">
        <div className="row portfolio">
          <div className="three columns header-col">
            <h1><span>My Projects</span></h1>
          </div>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <div className="overlay">
                    <div class="github-card" data-github="atishayjain708/TS_MF_cluster_analysis" data-width="275" data-height="175" data-theme="default"></div>
                    </div>
                    
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <div className="overlay">
                    <div class="github-card" data-github="atishayjain708/shape-discord-identification" data-width="275" data-height="175" data-theme="default"></div>
                    </div>
                    
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <div className="overlay">
                    <div class="github-card" data-github="atishayjain708/Face-Recognition-PCA" data-width="275" data-height="175" data-theme="default"></div>
                    </div>
                    
                  </a>
                </div>
              </div> {/* item end */}
            </div> {/* portfolio-wrapper end */}
            {/* portfolio-wrapper */}

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <div className="overlay">
                    <div class="github-card" data-github="atishayjain708/image-classification-CIFAR10-tf" data-width="275" data-height="175" data-theme="default"></div>
                    </div>
                    
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <div className="overlay">
                    <div class="github-card" data-github="atishayjain708/UniPool" data-width="275" data-height="175" data-theme="default"></div>
                    </div>
                    
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <div className="overlay">
                    <div class="github-card" data-github="atishayjain708/awesome-competitive-programming" data-width="275" data-height="175" data-theme="default"></div>
                    </div>
                    
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <div className="overlay">
                    <div class="github-card" data-github="atishayjain708/2018_SNU_Hack_HackstreetBoys" data-width="275" data-height="175" data-theme="default"></div>
                    </div>
                    
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <div className="overlay">
                    <div class="github-card" data-github="atishayjain708/AttendanceMonitor" data-width="275" data-height="175" data-theme="default"></div>
                    </div>
                    
                  </a>
                </div>
              </div>  {/* item end */}
          </div> {/* twelve columns end */}
        </div></section>
      }
      </React.Fragment>
    );
  }
}

              //     {/* Modal Popup
              //   --------------------------------------------------------------- */}
              //   <div id="modal-01" className="popup-modal mfp-hide">
              //   <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt />
              //   <div className="description-box">
              //     <h4>Coffee Cup</h4>
              //     <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              //     <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
              //   </div>
              //   <div className="link-box">
              //     <a href="http://www.behance.net">Details</a>
              //     <a className="popup-modal-dismiss">Close</a>
              //   </div>
              // </div>{/* modal-01 End */}
              // <div id="modal-02" className="popup-modal mfp-hide">
              //   <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt />
              //   <div className="description-box">
              //     <h4>Console</h4>
              //     <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              //     <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
              //   </div>
              //   <div className="link-box">
              //     <a href="http://www.behance.net">Details</a>
              //     <a className="popup-modal-dismiss">Close</a>
              //   </div>
              // </div>{/* modal-02 End */}
              // <div id="modal-03" className="popup-modal mfp-hide">
              //   <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt />
              //   <div className="description-box">
              //     <h4>Judah</h4>
              //     <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              //     <span className="categories"><i className="fa fa-tag" />Branding</span>
              //   </div>
              //   <div className="link-box">
              //     <a href="http://www.behance.net">Details</a>
              //     <a className="popup-modal-dismiss">Close</a>
              //   </div>
              // </div>{/* modal-03 End */}
              // <div id="modal-04" className="popup-modal mfp-hide">
              //   <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt />
              //   <div className="description-box">
              //     <h4>Into the Light</h4>
              //     <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              //     <span className="categories"><i className="fa fa-tag" />Photography</span>
              //   </div>
              //   <div className="link-box">
              //     <a href="http://www.behance.net">Details</a>
              //     <a className="popup-modal-dismiss">Close</a>
              //   </div>
              // </div>{/* modal-04 End */}
              // <div id="modal-05" className="popup-modal mfp-hide">
              //   <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt />
              //   <div className="description-box">
              //     <h4>Farmer Boy</h4>
              //     <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              //     <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
              //   </div>
              //   <div className="link-box">
              //     <a href="http://www.behance.net">Details</a>
              //     <a className="popup-modal-dismiss">Close</a>
              //   </div>
              // </div>{/* modal-05 End */}
              // <div id="modal-06" className="popup-modal mfp-hide">
              //   <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt />
              //   <div className="description-box">
              //     <h4>Girl</h4>
              //     <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              //     <span className="categories"><i className="fa fa-tag" />Photography</span>
              //   </div>
              //   <div className="link-box">
              //     <a href="http://www.behance.net">Details</a>
              //     <a className="popup-modal-dismiss">Close</a>
              //   </div>
              // </div>{/* modal-06 End */}
              // <div id="modal-07" className="popup-modal mfp-hide">
              //   <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt />
              //   <div className="description-box">
              //     <h4>Origami</h4>
              //     <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              //     <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
              //   </div>
              //   <div className="link-box">
              //     <a href="http://www.behance.net">Details</a>
              //     <a className="popup-modal-dismiss">Close</a>
              //   </div>
              // </div>{/* modal-07 End */}
              // <div id="modal-08" className="popup-modal mfp-hide">
              //   <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt />
              //   <div className="description-box">
              //     <h4>Retrocam</h4>
              //     <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              //     <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
              //   </div>
              //   <div className="link-box">
              //     <a href="http://www.behance.net">Details</a>
              //     <a className="popup-modal-dismiss">Close</a>
              //   </div>
              // </div>{/* modal-01 End */}