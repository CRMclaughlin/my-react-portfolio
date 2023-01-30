import React from 'react';
import Headshot from '../assets/resized.jpg'

function About() {
  return (
    
    <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <h2> Hello, I'm Christopher McLaughlin</h2> 
    </div>
    <div class="col">
      <img src={Headshot}/>
      
      <p></p>
    </div>
  </div>
</div>
    
  );
}

export default About;
