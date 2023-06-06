import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";
import { ItemDetail} from "../itemDetail"

//ejemplo para acceder a UN documento, esto se utilizaria en realidad para un Detail
const ItemDetailContainer = () => {
  const id = useParams().id;
  const [cart, setCart] = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);

  const [product, setProduct] = useState();
  const [msg, setMsg] = useState("Cargando...");

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
  }, []);


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

  return (
    <>
    {/* <div className="body">
      <button className="backBotton">
        <Link className="nav-link text-black" to="/">
          Volver al listado
        </Link>
      </button>
      <h2>{product.nombre}</h2>
      <h2>{product.desc}</h2>
      <button onClick={() => addToCart(product.nombre, product.precio, id)}>
        Agregar al carrito
      </button>
      <img src={product.imagen} alt={product.nombre}></img> 
      <h2>{product.precio}</h2>
      <h2>{product.stock}</h2>
      <h2>{product.tipo}</h2>
    </div> */}
    <ItemDetail id={id} product={product} addToCart={addToCart} sumarCarrito={sumarCarrito} restarCarrito={restarCarrito} cantidad={cantidad}></ItemDetail>
    </>
  );
};
export { ItemDetailContainer };