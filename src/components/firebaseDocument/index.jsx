import { getFirestore, docs, getDocs, collection, query, where } from "firebase/firestore";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";

//ejemplo para acceder a UN documento, esto se utilizaria en realidad para un Detail
const FirebaseDocument = () => {
  const categoria = useParams().categoria;
  const [cart, setCart] = useContext(CartContext);

  const [product, setProduct] = useState();


  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "items");
    const filteredCollectionRef = query(collectionRef, where("categoria", "in", [`${categoria}`]));
    getDocs(filteredCollectionRef).then((querySnapshot) => {
      setProduct(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
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

  const addToCart = (nombre, id, precio) => {

    // setCantidad(0);
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
  
  const mayuscula =(str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const capitalizedString = mayuscula(categoria);

  return (
    <>
    <div className="body">
    <h1>Bienvenido a la categoria de: {capitalizedString}</h1>
    
    <div className="productsContainer">
        {product.map((product) => {
          return (
            <div key={product.id} className="card">
              <img
                className="card-img-top img"
                src={product.imagen}
                alt={product.nombre}
              ></img>
              <div className="card-sody">
                <h5 className="card-title">{product.nombre}</h5>
                <h3 className="card-text"> Precio ${product.precio}</h3>
                <h4>{product.categoria}</h4>
                {/* <h2>{product.desc}</h2> */}
                <h2>Stock disponible: {product.stock}</h2>
                <button
                  onClick={() =>
                    addToCart(product.nombre, product.id, product.precio)
                  }
                >
                  Agregar al carrito
                </button>
                <Link
                  id={product.id}
                  className="btn btn-secondary agregar"
                  to={`/itemdetail/${product.id}`}
                >
                  Ver detalle del producto
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    {/* <div className="body">
      <button className="backBotton">
        <Link className="nav-link text-black" to="/fbcollection">
          Volver al listado
        </Link>
      </button>
      <h2>{product.nombre}</h2>
      <h2>{product.desc}</h2>
       <button onClick={() => addToCart(product.nombre, product.precio)}>
        Agregar al carrito
      </button> 
      <img src={product.imagen} alt={product.nombre}></img> 
      <h2>{product.precio}</h2>
      <h2>{product.stock}</h2>
      <h2>{product.tipo}</h2>
    </div>  */}
    </>
  );
};
export { FirebaseDocument };
