import React from 'react';
import ResumePic from '../assets/crm-resume.png'


function Resume() {

  return (
    <div className="container text-center pt-3">
        <img src={ResumePic} />
        <div className="m-2">
                <a className="btn btn-outline-light btn-floating m-1"
                href="https://docs.google.com/document/d/1ovsAKCb4VOPrbvSY4WV8kb51Znwh4c2CwUCFeI94EBs/edit?usp=sharing">
                    <i id="resume-link" class="bi bi-google"></i> Resume 
                </a>
            </div>

    </div>
  
  );
}

export default Resume;