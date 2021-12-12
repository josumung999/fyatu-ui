import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="left">
          <a href="!#" className="navbar-brand">
            <img src="https://sandbox.fyatu.com/new/img/brand/logo_dark.png" alt="" height="56" />
          </a>
        </div>
        <div className="center">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="!#" className="nav-link">SERVICES</a>
            </li>
            <li className="nav-item">
              <a href="!#" className="nav-link">A PROPOS</a>
            </li>
            <li className="nav-item">
              <a href="!#" className="nav-link">FAQ</a>
            </li>
            <li className="nav-item">
              <a href="!#" className="nav-link">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <button className="btn btn-outline mx-3">
            <i className="fa fa-lock"></i> CONNEXION
          </button>
          <button className="btn btn-full">
            <i className="fa fa-user"></i> CRÉER UN COMPTE
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
