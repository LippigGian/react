
import { useState } from "react"
const ItemCount = (product) =>
{

    const [sumar, setSumar]=useState(0)
    const [total, setTotal]=useState(0)

    const sumarCarrito =()=>
    {
        setSumar(sumar+1)
    }
    const restarCarrito =()=>
    {
        setSumar(sumar-1)
    }

    const sumartotal =()=>
    {
     const total =product.precio * sumar  
     setTotal(total) 
    }
const agregarAlCarrito = () =>
{
    console.log("se agrego al carrito "+sumar+" unidades del producto "+product.nombre+ "y el total es: "+total)
    setSumar(0)
    sumartotal()
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