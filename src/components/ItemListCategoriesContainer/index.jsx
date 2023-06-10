import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";
import { ItemListCategories } from "../ItemListCategories";

const ItemListCategoriesContainer = () => {
  const categoria = useParams().categoria;
    // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);

  const [product, setProduct] = useState();

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "items");
    const filteredCollectionRef = query(
      collectionRef,
      where("categoria", "in", [`${categoria}`])
    );
    getDocs(filteredCollectionRef).then((querySnapshot) => {
      setProduct(
        querySnapshot.docs.map((doc) => ({  id: doc.id, ...doc.data() }))
      );
    });
  }, [categoria]);

  if (!product) {
    return (
      <div className="containerLoader">
        <h2>Cargando...</h2>
        <div className="spinner"></div>
      </div>
    );
  }

  const mayuscula = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const capitalizedString = mayuscula(categoria);

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
  const addToCart = (nombre, id, precio) => {
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

  return (
    <div className="body">
      <h1>Bienvenido a la categoria de: {capitalizedString}</h1>

      <div className="productsContainer">
        {product.map((product) => {
          return (
          
              <ItemListCategories
                key={product.id}
                {...product}
                removeItem={removeItem}
                addToCart={addToCart}
              ></ItemListCategories>
            
          );
        })}
      </div>
    </div>
  );
};
export { ItemListCategoriesContainer };
