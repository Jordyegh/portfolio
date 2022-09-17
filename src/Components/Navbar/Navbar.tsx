import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar(): JSX.Element {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className='container-fluid'>
        <span className='navbar-brand mb-0 h1'>&#123; Jordy Hertogs &#125;</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className='navbar-toggler-icon' />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">My projects</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-haspopup="true"
                 aria-expanded="false">Contact</Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/contact">Contact information</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/message">Send me a message</Link>
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;