import React, { useState } from 'react';

const ItemCount = ({stock,inicial,onAdd}) => {
  const [quantity, setQuantity]=useState (1);
  
  const sumarProducto=()=>quantity<stock && setQuantity(quantity+1)
     
  const restarProducto=()=>quantity>inicial && setQuantity(quantity-1)

 
  return (
    <div className="container">
        <div>
            <div className="col">
                <button type="button" className="btn btn-primary" onClick={restarProducto}>-</button>
                <button type="button" className="btn btn-primary">{quantity}</button>
                <button type="button" className="btn btn-primary" onClick={sumarProducto}>+</button>
            </div>
            <div className="col">
                <button  type="button" className="btn btn-warning"onClick={()=>onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCount