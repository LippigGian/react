import { useState } from "react"
import { ItemCount } from "../itemCount"

const ItemDetail = ({item}) =>
{
    const [cantidad, setCantidad]=useState(0)

    const sumarCarrito =()=>
    {
       
        item.stock > cantidad && setCantidad(cantidad+1)
    }
    const restarCarrito =()=>
    {
        setCantidad(cantidad-1)
    }
    const agregarAlCarrito = () =>
    /*usamos el spread operator para llamar al objeto completo y agregarle la propiedad "cantidad". ya que al hacerle el pedido a la base de datos le voy a tener que decir
    cuantos el cliente eligió*/
{
  console.log({...item, cantidad})
    console.log({...item, stock: (item.stock-cantidad)})
    console.log("se agrego al carrito "+cantidad+" unidades del producto "+item.nombre)
    setCantidad(0)

}


    return (
            <div className="detail">
                
    <img className="detail-img" src={item.imagen} alt="Card cap"></img>
        <div className="card-sody">
          <h1 className="card-title">{item.nombre}</h1>
          <h4 className="card-text">Descripcion: {item.desc}.</h4>
           {item.talle && <h4 className="card-subtitle"> Talle: {item.talle}</h4>}
          <h3 className="card-text"> Precio ${item.precio}</h3>
          <h4>{item.categoria}</h4>
          <h4>Stock disponible: {item.stock}</h4>
                <h3>{item.tipo}</h3>
                <ItemCount agregarAlCarrito={agregarAlCarrito} sumarCarrito={sumarCarrito} restarCarrito={restarCarrito} id={item.id} nombre={item.nombre} precio={item.precio} cantidad={cantidad}></ItemCount>
            </div>
        </div>
    )
}

export {ItemDetail}


/*



    <img className="card-img-top img" src={imagen} alt="Card cap"></img>
        <div className="card-sody">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Descripcion: {desc}.</p>
           {talle && <h4 className="card-subtitle"> Talle: {talle}</h4>}
          <h3 className="card-text"> Precio ${precio}</h3>
          <h4>{categoria}</h4>
          <h4>{cantidad}</h4>


          */