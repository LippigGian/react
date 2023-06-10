import React from "react";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({
  product,
  addToCart,
  sumarCarrito,
  restarCarrito,
  cantidad,
  id,
  cantidadPorItem,
  removeItem
}) => {
  //Volver a la página anterior
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>      <button className="btn btn-secondary backBotton" onClick={handleGoBack}>
    Volver al listado
  </button>
    <div className="detail-container">
     
      <div className="detail-producto">

        
        <img  className="card-img"src={product.imagen} alt={product.nombre}></img>
        <p className="card-text">{product.desc}.</p>
        {product.talle && (
          <p className="card-subtitle"> Talle: {product.talle}</p>
        )}
        <p className="card-text"> Precio ${product.precio}</p>
        <p>{product.categoria}</p>
        
        </div>
        <div className="detail-card card">
        <h3 className="card-title">{product.nombre}</h3>
        <p>Envios a todo el pais</p>
        <p>Stock disponible: {product.stock}</p>
     
        <div className="detail-producto-botones">
          <div className="botonera">
            <button className="btn btn-dark" onClick={() => sumarCarrito()}>
              {" "}
              +{" "}
            </button>
            <h2>{cantidad}</h2>
            {cantidad > 0 ? (
              <button className="btn btn-dark" onClick={() => restarCarrito()}>
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
            onClick={() => addToCart(product.nombre, product.precio, id)}
          >
            Agregar al carrito
          </button>
          {cantidadPorItem > 0 && (
            <button
              className="btn btn-danger agregar"
              onClick={() => removeItem(id)}
            >
              Eliminar 1 unidad
            </button>
          )}
          {cantidadPorItem > 0 && (
            <div>
              <h3>Cantidad en carrito: {cantidadPorItem}</h3>
            </div>
          )}
          <p>30 días de garantía de fábrica.</p>
        </div>
        </div>
      </div>
      </>
  );
};

export { ItemDetail };
