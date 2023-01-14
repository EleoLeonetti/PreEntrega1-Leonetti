import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stockProductos, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockProductos);
    const [vendido, setVendido] = useState(false);

    useEffect(() => {
      setStock(stockProductos);
    }, [stockProductos]);

    const sumarProducto = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }    
    };

    const restarProducto = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }    
    };

    const addToCart = (quantity) => {
        setStock(stock - quantity);
        setCounter(1);
        setVendido(true);
        onAdd(quantity);  
    };


    return (
      <div className="container text-center">
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" className="btn btn-outline-primary itemCount" onClick={restarProducto}>
                -
              </button>
              <button type="button" className="btn btn-outline-primary itemCount">
                {counter}
              </button>
              <button type="button" className="btn btn-outline-primary itemCount" onClick={sumarProducto}>
                +
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              {vendido ? <Link to={"/cart"} className="btn btn-outline-primary itemCount">Finalizar Compra</Link> : <button className="btn btn-outline-primary itemCount" onClick={() => {addToCart(counter)}}>
                Agregar al carrito
              </button>}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ItemCount;
   