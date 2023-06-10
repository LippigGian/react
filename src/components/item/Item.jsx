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
          <h4 className="card-title">{nombre}</h4>
          <p className="card-text"><strong> Precio </strong>${precio}</p>
          <p className="card-text"><strong>Stock disponible: </strong> {stock}</p>
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
              className="btn btn-success agregar"
              onClick={() => addToCart(id, nombre, precio)}
            >
              Sumar 1 unidad
            </button>
          )}
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
              <h3>Cantidad: {cantidadPorItem}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { Item };
