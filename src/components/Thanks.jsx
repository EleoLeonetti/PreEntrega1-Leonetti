import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Thanks = () => {
    const {id} = useParams();

    return(
        <div className="container py-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="alert alert-light text-center" role="alert">
              <h1>Gracias por tu compra!</h1>
              <p>Tu Número de Orden es: <b>{id}</b></p>
            </div>
            <Link to={"/"} className="btn btnBlanco">Volver a Inicio</Link>
          </div>
        </div>
      </div>
    )
};

export default Thanks;