import { useContext, useEffect } from "react"
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { useState } from "react"
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";
import { Link } from "react-router-dom";

// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


//ejemplo de firebase para una collection
const FirebaseCollecion = () =>
{
    const [products, setProducts] = useState();
    const [cart, setCart] =useContext(CartContext);

    //prueba para la barra de busqueda
    const[tableUsuarios, setTableUsuarios]=useState([]);
    const[busqueda, setBusqueda]=useState("");


    useEffect(()=>{
        const db =getFirestore();
        const collectionRef = collection(db, "items")
        getDocs(collectionRef).then((querySnapshot)=>{
            //aqui en setProducts nos llega un array "raro" de leer.
            //al ser collection y no product necesitaré hacer un map.
            setProducts(querySnapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
            // setUsuarios(querySnapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
            setTableUsuarios(querySnapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
        }) 
    },[])

    if(!products){
        return(
            <div className="containerLoader">
                <h2>Cargando...</h2>
                <div className="spinner"></div>
            </div>
        )
    }
    //desestrucutración:
    const {nombre, id, precio} = products;
    // products.map((product)=>{
    //     return(
    //         console.log(product.nombre)
    //     )
    // })
    // console.log(tableUsuarios)
    // console.log(products)
const addToCart = () =>
{
    console.log(cart)
  setCart((currentItems)=>{
    const isItemsFound = currentItems.find((item)=> item.id === products.id)
    // console.log("item Id"+item.id)
    console.log("id"+ products)
    if(isItemsFound)
    {
      return currentItems.map((item)=> {
        if(item.id === id)
        {
          return {...item, quantity: item.quantity +1, nombre}
        }
        else
        {
          return item;
        }
      })
    } else {
      return [...currentItems, {id, quantity:1 , precio, nombre}]
    }
  })
}
const handleChange= (e)=>{
    setBusqueda(e.target.value)
    filtrar(e.target.value)
}

const filtrar = (terminoBusqueda)=>{
    
    const resultadoDeBusqueda = tableUsuarios.filter((element)=> {
        if(element.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || 
        element.categoria.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
            return element; 
        }
        
    })
    setProducts(resultadoDeBusqueda)
}
    return(
        <div className="body">
            <div className="container-input">
                <input 
                className="form-control input buscar" 
                value={busqueda}
                placeholder="Busqueda por nombre de producto o categoría"
                onChange={handleChange}></input>
            </div>
            <div className="productsContainer"> 
        {products.map((product)=>{
            return(
        <div key={product.id } className="card">
            <img className="card-img-top img" src={product.imagen} alt={product.nombre}></img>
            <div className="card-sody">
                <h5 className="card-title">{product.nombre}</h5>
                <h3 className="card-text"> Precio ${product.precio}</h3>
                <h4>{product.categoria}</h4>
                {/* <h2>{product.desc}</h2> */}
                <h2>Stock disponible: {product.stock}</h2>
                <button onClick={()=>addToCart()}>Agregar al carrito</button>
                <Link id={product.id} className="btn btn-secondary agregar" to={`/fbdocument/${product.id}`}>
                Ver detalle del producto
                </Link>
            </div>
        </div>)
        })}
            </div>
        </div>
    )
}

export {FirebaseCollecion}