import { useState } from "react"

const ItemCount = (id) =>
{

    const [sumar, setSumar]=useState(0)

    const sumarCarrito =()=>
    {
        setSumar(sumar+1)
    
    }
    const restarCarrito =()=>
    {
        setSumar(sumar-1)
       
    }

const agregarAlCarrito = () =>
{
    console.log("se agrego al carrito "+sumar+" unidades del producto "+id.id)
    setSumar(0)
}

    return (
        <div className="producto-detalles-botones">
       <div className="botonera">
       <button className="btn btn-dark" onClick={sumarCarrito}> + </button>
       <h2>{sumar}</h2>
       {sumar>0 ?<button className="btn btn-dark" onClick={restarCarrito}> - </button> : <button className="btn btn-dark" disabled={true}>-</button>}
       </div>
       <button className="btn btn-primary agregar" onClick={agregarAlCarrito}>Agregar al carrito</button>
       </div>
       

    )
}
export {ItemCount}