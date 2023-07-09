import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //Chequear si dentro del carrito existe.
  const isInCart = (id) => {
    return cart.some((pr) => pr.id === id);
  };

  // Agregar al carrito.
  const addToCart = (product, quantity) => {
    if (!isInCart(product.id)) {
      setCart((prev) => [...prev, { ...product, quantity }]);
    } else {
      setCart((prev) =>
        prev.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        })
      );
    }
  };

  //Vaciar carrito.
  const vaciarCarrito = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
      } else {
        // Código a ejecutar si se cancela la acción
      }
    });
  };

  //Eliminar item del carrito.
  const removeItem = (id) => {
    const products = cart.filter((pr) => pr.id !== id);
    setCart([...products]);
    console.log("eliminando...");
  };
  //Calcular la cantidad total de items dentro del carrito.
  const totalProductos = () => {
    return cart.reduce((total, item) => (total += item.quantity), 0);
  };
  //Calcular el precio total del carrito.
  const priceTotal = () => {
    return cart.reduce(
      (total, item) => (total += item.quantity * item.precio),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeItem,
        totalProductos,
        priceTotal,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
