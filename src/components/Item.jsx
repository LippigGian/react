import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Item = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img
        className="card-img-top img"
        src={product.imagen}
        alt={product.nombre}
      ></img>
      <div className="card-sody">
        <h5 className="card-title">{product.nombre}</h5>
        <h3 className="card-text"> Precio ${product.precio}</h3>
        <h4>{product.categoria}</h4>
        <h4>Stock disponible: {product.stock}</h4>
        <button
          className="btn btn-primary agregar"
          onClick={() => addToCart(product, 1)}
        >
          Agregar al carrito
        </button>
        <Link
          className="btn btn-secondary agregar"
          to={`/itemdetail/${product.id}`}
        >
          Ver detalle del producto
        </Link>
      </div>
    </div>
  );
};

export default Item;
