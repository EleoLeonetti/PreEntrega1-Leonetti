import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="container">
            <div className="col-md-4 home">
                <div className="row">
                    <img src={"/images/presentacion.gif"} alt={"Presentación Kimkelen"}/>
                </div>
                <div className="row">
                    <Link to={"/category/productos"} className="btn btnCeleste">DESCUBRÍ KIMKELEN</Link>
                </div>
                </div>
            </div>

    )
};

export default Home;