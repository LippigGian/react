import React, { useState } from "react";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const sumarProducto = () => quantity < stock && setQuantity(quantity + 1);

  const restarProducto = () => quantity > inicial && setQuantity(quantity - 1);

  return (
    <div className="detail-producto-botones">
      <div className="botonera">
        <button className="btn btn-dark" onClick={sumarProducto}>
          {" "}
          +{" "}
        </button>
        <h2>{quantity}</h2>

        {quantity > 0 ? (
          <button className="btn btn-dark" onClick={restarProducto}>
            {" "}
            -{" "}
          </button>
        ) : (
          <button className="btn btn-dark" disabled={true}>
            -
          </button>
        )}
      </div>
      <button
        className="btn btn-success agregar"
        onClick={() => onAdd(quantity)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
