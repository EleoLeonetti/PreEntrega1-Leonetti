import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clear, cartTotal, sumaTotal } =
    useContext(CartContext);

  if (cartTotal() === 0) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="alert alert-light text-center" role="alert">No hay productos en el carrito</div>
            <Link to={"/category/productos"} className="btn bg-light">Ver productos</Link>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <table className="table bodyCart">

            <thead>
              <tr>
                <th scope="col" className="text-end" colSpan={5}>
                  <Link onClick={clear} className="btn btnAzul" title="Vaciar carrito">Vaciar Carrito</Link>
                </th>
              </tr>
              <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">Producto</th>
                <th scope="col" className="text-center">Cantidad</th>
                <th scope="col" className="text-center">Precio</th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td><img src={item.imagen} alt={item.nombre} width={70} /></td>
                  <td className="align-middle">{item.nombre}</td>
                  <td className="text-center align-middle">{item.quantity}</td>
                  <td className="text-center align-middle">$ {item.quantity * item.precio}.-</td>
                  <td className="text-end align-middle"><Link onClick={() => {removeItem(item.id);}} title="Eliminar producto"><img src={"images/trash.svg"} alt={"Eliminar producto"} width={20}/></Link></td>
                </tr>
              ))};
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td className="text-center">Total</td>
                <td className="text-center">$ {sumaTotal()}.-</td>
                <td className="text-end"><Link to={"/checkout"} className="btn btnAzul" title="Finalizar compra">Finalizar compra</Link></td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
