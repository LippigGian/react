
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";


export const Item = ({
  nombre,
  tipo,
  desc,
  precio,
  talle,
  stock,
  id,
  imagen,
  categoria
}) => {
const [cart, setCart] =useContext(CartContext);

const addToCart = () =>
{
  setCart((currentItems)=>{
    const isItemsFound = currentItems.find((item)=> item.id === id)
    if(isItemsFound)
    {
      return currentItems.map((item)=> {
        if(item.id === id)
        {
          return {...item, quantity: item.quantity +1}
        }
        else
        {
          return item;
        }
      })
    } else {
      return [...currentItems, {id, quantity:1 , precio}]
    }
  })
  console.log(cart)
}

const removeItem = (id) =>
{
  setCart((currentItems)=>{
  if(currentItems.find((item)=> item.id ===id)?.quantity===1)
  {
    return currentItems.filter((item)=> item.id !== id)
  } else{
    return currentItems.map((item) =>{
      if(item.id === id )
      {
        return {...item, quantity: item.quantity-1}
      }
      else{
        return item;
      }
    })
  }
  })
}
const getQuantityById = (id) =>{
  return cart.find((item)=> item.id ===id )?.quantity || 0;
} 
const cantidadPorItem = getQuantityById(id);
  return (
    <div className="card">
      <img className="card-img-top img" src={imagen} alt="Card cap"></img>
      <div className="card-sody">
        <h5 className="card-title">{nombre}</h5>
        {/* <p className="card-text">Descripcion: {desc}.</p> */}
        {/* {talle && <h4 className="card-subtitle"> Talle: {talle}</h4>} */}
        <h3 className="card-text"> Precio ${precio}</h3>
        <h4>{categoria}</h4>
        <h4>Stock disponible: {stock}</h4>
        <Link id={id} className="btn btn-secondary agregar" to={`/item/${id}`}>
          Ver detalle del producto
        </Link>
        {cantidadPorItem === 0 ? <button className="btn btn-primary agregar" onClick={()=>addToCart()} >Agregar al carrito</button>: <button className="btn btn-primary agregar" onClick={()=>addToCart()} >Sumar 1 unidad</button>}
        {cantidadPorItem > 0 && <button className="btn btn-primary agregar" onClick={()=>removeItem(id)} >Eliminar 1 del carrito</button>}
        
       {cantidadPorItem > 0 && <div><h3>{cantidadPorItem}</h3></div>}
        {/* <button  id={id} className="btn btn-primary agregar" >Agregar al carrito</button> */}
      </div>
    </div>
  );
};
