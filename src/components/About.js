import React from 'react';
import Headshot from '../assets/resized.jpg'

function About() {
  return (
    
    <div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
    <h2> Hello, I'm Christopher McLaughlin</h2> 
    </div>
    <div className="col">
      <img src={Headshot} alt="Christopher McLaughlin Headshot"/>
      
      <p></p>
    </div>
  </div>
</div>
    
  );
}

export default About;
