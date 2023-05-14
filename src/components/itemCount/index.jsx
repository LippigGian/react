import { useState } from "react"

const ItemCount = (cantidad) =>
{
    console.log(cantidad)
    const [sumar, setSumar]=useState(0)

    const sumarCarrito =()=>
    {
        setSumar(sumar+1)
        console.log(sumar)
    }
    const restarCarrito =()=>
    {
        setSumar(sumar-1)
        console.log(sumar)
    }


    return (
        <div className="botones">
       <button className="btn btn-dark" onClick={sumarCarrito}> + </button>
       <h2>{sumar}</h2>
       <button className="btn btn-dark" onClick={restarCarrito}> - </button>
       </div>

    )
}
export {ItemCount}