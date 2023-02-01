import React from 'react';


function Footer() {

  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-3">
        <section className="mb-4" />
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/" target="_blank" rel="noreferer" role="button">
            <i className="fab fa-linkedin-in"/>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/CRMclaughlin" target="_blank" role="button">
            <i className="fab fa-github"/>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://stackoverflow.com/" target="_blank" role="button">
            <i className="bi bi-stack-overflow"/>
          </a>
      </div>
    </footer>
  );
}

export default Footer;
