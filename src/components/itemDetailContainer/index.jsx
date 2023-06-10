import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";
import { ItemDetail } from "../itemDetail";

const ItemDetailContainer = () => {
  const id = useParams().id;
  const [cart, setCart] = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);

  const [product, setProduct] = useState();
  const [msg, setMsg] = useState("Cargando...");
  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };
  const cantidadPorItem = getQuantityById(id);

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        setProduct({ id: "", ...doc.data() });
      } else {
        setMsg("No se encontraron productos ");
      }
    });
    //no estoy seguro si debe actualizarse con el cambio del id
  }, [id]);

  if (!product) {
    return (
      <div className="containerLoader">
        <h2>{msg}...</h2>
        <div className="spinner"></div>
      </div>
    );
  }

  const sumarCarrito = () => {
    product.stock > cantidad && setCantidad(cantidad + 1);
  };
  const restarCarrito = () => {
    setCantidad(cantidad - 1);
  };

  const addToCart = (nombre, precio, id) => {
    setCantidad(0);
    setCart((currentItems) => {
      const isItemsFound = currentItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + cantidad, nombre };
          } else {
            return item;
          }
        });
      } else {
        return [...currentItems, { id, quantity: cantidad, precio, nombre }];
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
  return (
    <ItemDetail
      id={id}
      product={product}
      addToCart={addToCart}
      removeItem={removeItem}
      sumarCarrito={sumarCarrito}
      restarCarrito={restarCarrito}
      cantidad={cantidad}
      cantidadPorItem={cantidadPorItem}
    ></ItemDetail>
  );
};
export { ItemDetailContainer };
