import React from "react";
import { useState } from "react";

const ItemCount = ({stockProductos}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockProductos);

    const sumarProducto = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }    
    }

    const restarProducto = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }    
    }

    const onAdd = () => {
        if ((stock > 0) && (counter <= stock)){
            console.log("Agregaste " + counter + " productos al carrito");
            setStock(stock-counter);
            setCounter(1);
        }   
    }

    return (
      <div className="container text-center">
        <div className="row mb-3">
          <div className="col-md-12">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-outline-primary itemCount"
                onClick={restarProducto}
              >
                -
              </button>
              <button type="button" className="btn btn-outline-primary itemCount">
                {counter}
              </button>
              <button
                type="button"
                className="btn btn-outline-primary itemCount"
                onClick={sumarProducto}
              >
                +
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <button className="btn btn-outline-primary itemCount" onClick={onAdd}>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ItemCount;
   