import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidgets";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg barra">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img src={"/images/aguara.png"} alt={"Kimkelen"} width={80} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/productos"}>
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/mobiliario"}>
                Mobiliario
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/juegos"}>
                Juegos
              </NavLink>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

