import { useContext } from "react";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";
import { Link } from "react-router-dom";

const ItemListCategories = ({
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

  //funcion para el contador que muestra cuantos productos tenemos en el carrito debajo del mismo
  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };
  const cantidadPorItem = getQuantityById(id);

  return (
    <>
      <div key={id} className="card">
        <img className="card-img-top img" src={imagen} alt="Card cap"></img>
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
              onClick={() => addToCart(nombre, id, precio)}
            >
              Agregar al carrito
            </button>
          ) : (
            <button
              className="btn btn-primary agregar"
              onClick={() => addToCart(nombre, id, precio)}
            >
              Sumar 1 unidad
            </button>
          )}
          {cantidadPorItem > 0 && (
            <button
              className="btn btn-primary agregar"
              onClick={() => removeItem(id)}
            >
              Eliminar 1 del carrito
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

export { ItemListCategories };
