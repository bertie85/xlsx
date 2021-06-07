import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg">
    <button className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarToggler"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarToggler">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav;
