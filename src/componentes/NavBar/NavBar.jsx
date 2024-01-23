import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/" >
        <img src="./img/logo_eg.png" alt="" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/Categoria/Pinceles" >
              Pinceles
            </NavLink>
          </li>

          <li>
            <NavLink to="/Categoria/Rodillos" >
              Rodillos
            </NavLink>
          </li>

          <li>
            <NavLink to="/Categoria/Bandejas" >
              Bandejas
            </NavLink>
          </li>
        </ul>
      </nav>
      < CartWidget />
    </header>
  )
}

export default NavBar