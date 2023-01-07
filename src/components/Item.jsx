import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {

    return (
        <Link to={"/item/" + item.id} className="text-decoration-none">
        <div className={"card cardProducto"}>
            <img src={item.imagen} className={"card-img-top"} alt={item.nombre} />
            <div className={"card-body"}>
              <h5 className={"card-title cardTitulo"}>{item.nombre}</h5>
              <h5 className={"card-title cardTitulo"}>$ {item.precio}.-</h5>
            </div>
        </div>
        </Link>
    )
}

export default Item;