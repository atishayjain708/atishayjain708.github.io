import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Education from './components/education/education';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer'
import Portfolio from './components/portfolio/portfolio';
import Skills from './components/skills/skills';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Experience resumeData={resumeData}/>
        <Education resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Skills resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}
export default App;