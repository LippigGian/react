import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";

const Item = ({
  nombre,
  precio,
  stock,
  id,
  imagen,
  categoria,
  removeItem,
  addToCart,
}) => {
    // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };
  const cantidadPorItem = getQuantityById(id);

  return (
    <>
      <div className="card">
        <img className="card-img-top img" src={imagen} alt={nombre}></img>
        <div className="card-sody">
          <h5 className="card-title">{nombre}</h5>
          <h3 className="card-text"> Precio ${precio}</h3>
          <h4>{categoria}</h4>
          <h4>Stock disponible: {stock}</h4>
          <Link className="btn btn-secondary agregar" to={`/itemdetail/${id}`}>
            Ver detalle del producto
          </Link>
          {cantidadPorItem === 0 ? (
            <button
              className="btn btn-primary agregar"
              onClick={() => addToCart(id, nombre, precio)}
            >
              Agregar al carrito
            </button>
          ) : (
            <button
              className="btn btn-primary agregar"
              onClick={() => addToCart(id, nombre, precio)}
            >
              Sumar 1 unidad
            </button>
          )}
          {cantidadPorItem > 0 && (
            <button
              className="btn btn-primary agregar"
              onClick={() => removeItem(id)}
            >
              Eliminar 1 unidad
            </button>
          )}

          {cantidadPorItem > 0 && (
            <div>
              <h3>Cantidad: {cantidadPorItem}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { Item };
