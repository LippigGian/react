import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";

//ejemplo para acceder a UN documento, esto se utilizaria en realidad para un Detail
const FirebaseDocument = () => {
  const id = useParams().id;
  const [cart, setCart] = useContext(CartContext);

  const [product, setProduct] = useState();
  const [msg, setMsg] = useState("Cargando...");

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        setProduct({ id: "", ...doc.data() });
      } else {
        setMsg("No hay datos ");
      }
    });
  }, []);

  if (!product) {
    return (
      <div className="containerLoader">
        <h2>Cargando...</h2>
        <div className="spinner"></div>
      </div>
    );
  }

  const addToCart = (nombre, precio, id) => {
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
  if (!product) {
    return (
      <div className="containerLoader">
        <h2>Cargando...</h2>
        <div className="spinner"></div>
      </div>
    );
  }
  return (
    <div className="body">
      <button className="backBotton">
        <Link className="nav-link text-black" to="/fbcollection">
          Volver al listado
        </Link>
      </button>
      <h2>{product.nombre}</h2>
      <h2>{product.desc}</h2>
      <button onClick={() => addToCart(product.nombre, product.precio, id)}>
        Agregar al carrito
      </button>
      {/* <img src={product.imagen} alt={product.nombre}></img> */}
      <h2>{product.precio}</h2>
      <h2>{product.stock}</h2>
      <h2>{product.tipo}</h2>
    </div>
  );
};
export { FirebaseDocument };
