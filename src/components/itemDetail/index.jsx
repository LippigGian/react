
import { Link } from "react-router-dom";
const ItemDetail = ({ product, addToCart, sumarCarrito, restarCarrito, cantidad, id }) => {


  return (
    <div className="detail">
  <button className="backBotton">
        <Link className="nav-link text-black" to="/">
          Volver al listado
        </Link>
      </button>
      
      {/* <img className="detail-img" src={item.imagen} alt="Card cap"></img> */}
      <div className="card-sody">
        <h1 className="card-title">{product.nombre}</h1>
        <h4 className="card-text">Descripcion: {product.desc}.</h4>
        {product.talle && <h4 className="card-subtitle"> Talle: {product.talle}</h4>}
        <h3 className="card-text"> Precio ${product.precio}</h3>
        <h4>{product.categoria}</h4>
        <img src={product.imagen} alt={product.nombre}></img> 
        <h4>Stock disponible: {product.stock}</h4>
        <h3>{product.tipo}</h3>
        <h2>{product.id}</h2>
      <div className="producto-detalles-botones">
      <div className="botonera">
        <button className="btn btn-dark" onClick={()=> sumarCarrito()}>
          {" "}
          +{" "}
        </button>
        <h2>{cantidad}</h2>
        {cantidad > 0 ? (
          <button className="btn btn-dark" onClick={()=> restarCarrito()}>
            {" "}
            -{" "}
          </button>
        ) : (
          <button className="btn btn-dark" disabled={true}>
            -
          </button>
        )}
      </div>
      <button className="btn btn-primary agregar" onClick={() => addToCart(product.nombre, product.precio, id)}>
        Agregar al carrito
      </button>
    </div>
      </div>
    </div>
  );
};

export { ItemDetail };
