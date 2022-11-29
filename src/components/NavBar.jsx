import React from "react";
import CartWidget from "./CartWidgets";

const NavBar = () => {
  return (
    <div className="row barra">
      <div className="col-md-6">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={"images/aguara.png"} alt={"Kimkelen"} width={80} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <a className="nav-link" href="/inicio">
                  </a>
                </li>
              <li className="nav-item">
                  <a className="nav-link" href="/mobiliario">
                    Mobiliario
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/juegos">
                    Juegos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-md-6 d-flex justify-content-end align-items-center">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
