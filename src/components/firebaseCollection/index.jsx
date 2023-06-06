import { useContext, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";
import { Link, useParams } from "react-router-dom";

// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

//ejemplo de firebase para una collection
const FirebaseCollecion = () => {
  const [cart, setCart] = useContext(CartContext);
  const [products, setProducts] = useState([]);

  //prueba para filtrar por categoria
  const category = useParams().category;

  //prueba para la barra de busqueda
  const [productosBusqueda, setProductosBusqueda] = useState([]);
  const [productosOriginal, setProductosOriginal] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  // const[prueba, setPrueba]=useState()

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "items");
    getDocs(collectionRef).then((querySnapshot) => {
      //aqui en setProducts nos llega un array "raro" de leer.
      //al ser collection y no product necesitaré hacer un map.
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setProductosBusqueda(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setProductosOriginal(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );

        /*filtrar por categoria*/
      if (category){
        setProducts(productosOriginal.filter((prod) => prod.categoria === category))
      }

      /*filtrar por categoria 2 */
      // if (category){
      //   setProducts(productosOriginal.filter((prod) => prod.categoria === category))
      // }
      
    }
    );


    
  }, [category]);

  if (!products) {
    return (
      <div className="containerLoader">
        <h2>Cargando...</h2>
        <div className="spinner"></div>
      </div>
    );
  }
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
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadoDeBusqueda = productosBusqueda.filter((element) => {
      if (
        element.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        element.categoria
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return element;
      }
    });
    setProducts(resultadoDeBusqueda);
  };

  const ordenar = (e) => {
    products.sort((a, b) => {
      if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
        return -1;
      }
      if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    if (e.target.value === "a-z") {
      setProducts([...products]);
    } else {
      products.reverse();
      setProducts([...products]);
    }
    console.log(products);
    //El asunto con React, y arreglos, es que react trata de buscar que haya cambiado algo en la variable,
    //pero tu arreglo generalmente es el mismo, lo que se suele usar en React es el spread
    //operator (...), declarando un arreglo nuevo dentro de tu set, por ejemplo
  };

  const ordenarPrecio = (e) => {
    products.sort((a, b) => {
      if (a.precio < b.precio) {
        return -1;
      }
      if (a.precio > b.precio) {
        return 1;
      }
      return 0;
    });
    if (e.target.value === "mayor") {
      setProducts([...products]);
    } else {
      products.reverse();
      setProducts([...products]);
    }
  };
  const ordenarOriginal = () => {
    setProducts([...productosOriginal]);
  };

  return (
    <div className="body">
      <div className="container-input">
        <select name="Ordenar">
          <option onClick={() => ordenarOriginal()}>Por defecto</option>
          <option value="a-z" onClick={(e) => ordenar(e)}>
            Ordenar A-Z
          </option>
          <option value="z-a" onClick={(e) => ordenar(e)}>
            Ordenar Z-A
          </option>
          <option value={"mayor"} onClick={(e) => ordenarPrecio(e)}>
            Menor precio
          </option>
          <option value={"menor"} onClick={(e) => ordenarPrecio(e)}>
            Mayor precio
          </option>
        </select>
        <input
          className="form-control input buscar"
          value={busqueda}
          placeholder="Busqueda por nombre de producto o categoría"
          onChange={handleChange}
        ></input>
      </div>
      <div className="productsContainer">
        {products.map((product) => {
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
                  to={`/fbdocument/${product.id}`}
                >
                  Ver detalle del producto
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { FirebaseCollecion };
