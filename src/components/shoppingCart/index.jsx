import { useContext } from "react";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";
import { Checkout } from "../checkout";
import Swal from 'sweetalert2';




const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);
  // console.log(cart)
  const quantity = cart.reduce((acc, currentItem) => {
    return acc + currentItem.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, currentItem) => {
    return acc + currentItem.precio * currentItem.quantity;
  }, 0);

 const removeItem = (id) => {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleButtonClick = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([])
      } else {
        // Código a ejecutar si se cancela la acción
        console.log('La acción se ha cancelado.');
      }
    });
  };


  return (
    <div className="body-cart d-flex flex-column">
      <h3 className="text-center">Items en el carrito: {quantity}</h3>
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Importe</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((productos) => {
            return (
              <>
                <tr>
                  <td>{productos.nombre}</td>
                  <td>{productos.quantity}</td>
                  <td>{productos.precio}</td>
                  <td>{productos.precio * productos.quantity}</td>
                  <td><button  className="btn btn-danger" onClick={() => removeItem(productos.id)}>Eliminar 1 del carrito</button></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <div></div>
      <h3 className="text-center">Precio final: {totalPrice}</h3>
      <button className="btn btn-dark m-auto" onClick={handleButtonClick}>Vaciar carrito de compras</button>

      <Checkout></Checkout>
    </div>
  );
};

export { ShoppingCart };
