import { useContext } from "react";
import { Item } from "../item/Item";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";

export const ItemList = ({ products }) => {
    // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (id, nombre, precio) => {
    setCart((currentItems) => {
      const isItemsFound = currentItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1, nombre };
          } else {
            return item;
          }
        });
      } else {
        return [...currentItems, { id, quantity: 1, precio, nombre }];
      }
    });
  };

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

  if (!products) {
    return (
      <div className="containerLoader">
        <h2>Cargando...</h2>
        <div className="spinner"></div>
      </div>
    );
  }
  return (
    <>
      <div className="productsContainer">
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              {...product}
              removeItem={removeItem}
              addToCart={addToCart}
            ></Item>
          );
        })}
      </div>
    </>
  );
};
