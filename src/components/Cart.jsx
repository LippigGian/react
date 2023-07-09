import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, totalProductos,priceTotal, removeItem,vaciarCarrito}= useContext(CartContext)

return (

    <div className="body-cart d-flex flex-column m-5">
    <table className="table" border="1">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio unitario</th>
          <th>Importe</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((productos) => {
          return (
            <tr key={productos.id}>
              <td>{productos.nombre}</td>
              <td>{productos.quantity}</td>
              <td>{productos.precio}</td>
              <td>{productos.precio * productos.quantity}</td>
              <td className='d-flex justify-content-center'>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(productos.id)}
                >
                  Eliminar del carrito
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <div></div>
    <div className="d-flex justify-content-evenly">
      <h3 className="text-center">
        <strong>Precio final:</strong> ${priceTotal()}
      </h3>
      <h3 className="text-center">
        <strong>Items en el carrito:</strong> {totalProductos()}
      </h3>
    </div>
    <div className='d-flex m-5'>
        <button className="btn btn-success m-auto"><Link className="link-style" to='/checkout'>Finalizar compra</Link></button>
        <button className="btn btn-danger m-auto" onClick={vaciarCarrito}>
      Vaciar carrito
    </button>
  </div>
  </div>

  )
}

export default Cart