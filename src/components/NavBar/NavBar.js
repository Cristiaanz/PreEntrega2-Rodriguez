import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Redragon
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/category/auriculares"
            >
              Auriculares
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/category/teclados"
            >
              Teclados
            </Link>
          </div>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
