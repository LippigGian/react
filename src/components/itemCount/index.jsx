const ItemCount = ({
  cantidad,
  sumarCarrito,
  restarCarrito,
  agregarAlCarrito,
}) => {
  return (
    <div className="producto-detalles-botones">
      <div className="botonera">
        <button className="btn btn-dark" onClick={sumarCarrito}>
          {" "}
          +{" "}
        </button>
        <h2>{cantidad}</h2>
        {cantidad > 0 ? (
          <button className="btn btn-dark" onClick={restarCarrito}>
            {" "}
            -{" "}
          </button>
        ) : (
          <button className="btn btn-dark" disabled={true}>
            -
          </button>
        )}
      </div>
      <button className="btn btn-primary agregar" onClick={agregarAlCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
};
export { ItemCount };
