const Navbar = ({ view, setView }) => {
console.log(view)

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
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => setView('portfolio')}
              className={`nav-link ${view === 'portfolio' ? 'active fw-bold' : ''}`}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => setView('resume')}
              className={`nav-link ${view === 'resume' ? 'active fw-bold' : ''}`}
              href="#"
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => setView('contact')}
              className={`nav-link ${view === 'Contact' ? 'active fw-bold' : ''}`}
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
