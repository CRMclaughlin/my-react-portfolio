import React from 'react';
import Headshot from '../../assets/resized.jpg'
import './style.css'

function About() {
  return (
    
    <div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
    <h2 className="mt-5"> Hello, I'm Christopher McLaughlin</h2> 
      <p className="pt-3 fs-4">I am a full stack web developer. I really enjoy the creativity and puzzle solving that coding brings me. I'm looking forward to working with and learning more about Machine learning and AI development. </p>
    </div>
    <div className="col">
      <img src={Headshot} alt="Christopher McLaughlin Headshot"/>
      
    </div>
  </div>
</div>
    
  );
}

export default About;
