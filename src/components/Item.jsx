import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({  nombre,
  precio,
  stock,
  id,
  imagen,
  categoria,
  removeItem,
  addToCart}) => {
   
  return (
    // <div key={id}>
    //     <div className="card alinearCards mt-3">
    //         <img src={pictureURL} className="card-img-top ImgCardRender" alt="..."/>
    //         <div className="card-body">
    //             <h5 className="card-title">{title}</h5>
    //             <p className="card-text">${price}</p>
    //             <Link to={`/item/${id}`} className="btn btn-primary"style={{display:"flex",justifyContent:"center"}}>Ver detalle</Link>
    //         </div>
    //     </div>
    // </div>

  

    <div className="card">
    <img className="card-img-top img" src={imagen} alt={nombre}></img>
    <div className="card-sody">
      <h5 className="card-title">{nombre}</h5>
      <h3 className="card-text"> Precio ${precio}</h3>
      <h4>{categoria}</h4>
      <h4>Stock disponible: {stock}</h4>
      <h5>el id es: {id}</h5>
      <Link className="btn btn-secondary agregar" to={`/itemdetail/${id}`}>
        Ver detalle del producto
      </Link>
    </div>
  </div>
  )
}

export default Item