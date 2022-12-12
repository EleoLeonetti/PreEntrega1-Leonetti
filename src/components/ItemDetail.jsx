import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {

    return(
        <div className="card cardDetalle mb-5 mt-5 text-center">
            <img src={item.imagen} className="card-img-top" alt={item.nombre} />
            <div className="card-body">
                <h5 className="cardTitulo">{item.nombre}</h5>
                <p className="cardDescripcion">{item.descripcion}</p>
                <p className="cardTitulo">$ {item.precio}.-</p>
            </div>
            <ItemCount stockItems={item.stock} />
        </div>
    )
}

export default ItemDetail;
