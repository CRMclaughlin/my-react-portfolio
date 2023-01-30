const Navbar = ({ view, setView }) => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CRMcLaughlin</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              onClick={() => setView('home')}
              className={`nav-link ${view === 'home' ? 'active fw-bold' : ''}`}
              href="#"
            >
              <i class="bi bi-info-circle-fill"></i> About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => setView('portfolio')}
              className={`nav-link ${view === 'portfolio' ? 'active fw-bold' : ''}`}
            >
              <i class="bi bi-collection"></i> Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => setView('resume')}
              className={`nav-link ${view === 'resume' ? 'active fw-bold' : ''}`}
              href="#"
            >
              <i class="bi bi-person-lines-fill"></i> Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => setView('contact')}
              className={`nav-link ${view === 'Contact' ? 'active fw-bold' : ''}`}
              href="#"
            >
              <i class="bi bi-person-rolodex"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
