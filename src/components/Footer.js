import React from 'react';


function Footer() {

  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-3">
        <section className="mb-4" />
        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/christopher-mclaughlin-374024b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQCsdxflVS7CM0v2dBZ0jLA%3D%3D" target="_blank" rel="noreferer" role="button">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/CRMclaughlin" target="_blank" role="button">
          <i className="fab fa-github" />
        </a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://stackoverflow.com/users/21254106/christopher-mclaughlin?tab=profile" target="_blank" role="button">
          <i className="bi bi-stack-overflow" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
