import React, { useContext, useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import {CartContext} from '../context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({product}) => {
  const {addItem, addToCart}=useContext(CartContext)
  const [quantifyAdded, setQuantifyAdded]=useState(0)

  const onAdd=(quantity) =>{
    // console.log(quantity)
    setQuantifyAdded(quantifyAdded-quantity)
    addItem(product, quantity)
    // addItem(product.nombre, product.precio, product.id, quantity)
    // addToCart(product.nombre, product.precio, product.id, quantity)
  }
  // addToCart(product.nombre, product.precio, product.id)
  useEffect(()=>{
    setQuantifyAdded(product.stock)
  },[product.stock])


  
  // const sumarCarrito = () => {
  //   product.stock > cantidad && setCantidad(cantidad + 1);
  // };
  // const restarCarrito = () => {
  //   setCantidad(cantidad - 1);
  // };



  return (
    // <>
    //       <div key={product.id} className="card mb-2">
    //         <div className="row g-0">
    //             <div className="col-md-4">
    //                 <img src={product.pictureURL} className="card-img-top" alt="..."/>
    //             </div>
    //             <div className="col-md-4">
    //               <div className="card-body">
    //                 <h5 className="card-title">{product.title}</h5>
    //                 <p className="card-text">{product.desc}</p>
    //                 <h3 className="card-text">$ {product.price}</h3>
    //                 <p className="card-text"><small className="text-muted">stock: {product.stock}</small></p>
                    
    //                 <ItemCount inicial={1}stock={product.stock} onAdd={onAdd}/>
    //                 <button className='btn btn-success'>{quantifyAdded>0}<Link to='/cart'>Ir al Carrito</Link></button>
    //               </div>
    //             </div>
    //         </div>
    //       </div>

    // </>



    //gian

    <>
      {" "}
      {/* <button className="btn btn-secondary backBotton" onClick={handleGoBack}>
        Volver al listado
      </button> */}
      <div className="detail-container">
        <div className="detail-producto">
          <img
            className="card-img"
            src={product.imagen}
            alt={product.nombre}
          ></img>
          <h4 className="card-text">
            <strong>Detalle del producto: </strong>
            <br></br>
            {product.desc}.
          </h4>
          <h5>el id es: {product.id}</h5>
          {product.talle && (
            <p className="card-subtitle">
              {" "}
              <strong>Talle:</strong> {product.talle}
            </p>
          )}
          <p className="card-text">
            <strong> Precio</strong> ${product.precio}
          </p>
        </div>
        <div className="detail-card card">
          <h3 className="card-title nombre">{product.nombre}</h3>
          <p>Envios a todo el pais</p>
          <p>Stock disponible: {product.stock}</p>

          <div className="detail-producto-botones">
          <ItemCount inicial={1}stock={product.stock} onAdd={onAdd}/>
          {/* <button
              className="btn btn-success agregar"
              onClick={() => addToCart(product.nombre, product.precio, product.id)}
            >
              Agregar al carritoooooooooo
            </button> */}
             {/* <button className='btn btn-success'>{quantifyAdded>0}<Link to='/cart'>Ir al Carrito</Link></button> */}
          {/* <button
              className="btn btn-success agregar"
              onClick={() => addToCart(product.nombre, product.precio, product.id)}
            >
              Agregar al carrito
            </button>  */}
          {/* <button className='btn btn-success'>{quantifyAdded>0}<Link to='/cart'>Ir al Carrito</Link></button> */}
            {/* <div className="botonera"> */}
              {/* <button className="btn btn-dark" onClick={() => sumarCarrito()}>
                {" "}
                +{" "} */}
              {/* </button>
              <h2>{cantidad}</h2>
              {cantidad > 0 ? (
                <button
                  className="btn btn-dark"
                  onClick={() => restarCarrito()}
                >
                  {" "}
                  -{" "}
                </button>
              ) : (
                <button className="btn btn-dark" disabled={true}>
                  -
                </button>
              )}
            </div> */}
            {/* <button
              className="btn btn-success agregar"
              onClick={() => addToCart(product.nombre, product.precio, id)}
            >
              Agregar al carrito
            </button> */}
            {/* {cantidadPorItem > 0 && (
              <button
                className="btn btn-danger agregar"
                onClick={() => removeItem(id)}
              >
                Eliminar 1 unidad
              </button>
            )} */}
            {/* {cantidadPorItem > 0 && (
              <div>
                <h3>Cantidad en carrito: {cantidadPorItem}</h3>
              </div>
            )} */}
            <p>30 días de garantía de fábrica.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail