import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <>
      {" "}
      <div className="detail-container">
        <div className="detail-producto">
          <img
            className="card-img"
            src={product.imagen}
            alt={product.nombre}
          ></img>
          <h4 className="card-text">
            <strong>Detalle del producto: </strong>
            <br></br>
            {product.desc}.
          </h4>
          <h5>el id es: {product.id}</h5>
          {product.talle && (
            <p className="card-subtitle">
              {" "}
              <strong>Talle:</strong> {product.talle}
            </p>
          )}
          <p className="card-text">
            <strong> Precio</strong> ${product.precio}
          </p>
        </div>
        <div className="detail-card card">
          <h3 className="card-title nombre">{product.nombre}</h3>
          <p>Envios a todo el pais</p>
          <p>Stock disponible: {product.stock}</p>

          <div className="detail-producto-botones">
            <ItemCount inicial={1} stock={product.stock} onAdd={onAdd} />
            <p>30 días de garantía de fábrica.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
