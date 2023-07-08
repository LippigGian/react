import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, cartTotal,priceTotal, removeItem, clear, addToCart}= useContext(CartContext)
    if (cartTotal() === 0) {
        return (
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-md-12 text-center'>
                        <div className="alert alert-danger" role="alert">No se encontraron productos!!!
                        </div>
                        <Link to={"/"} className="btn btn-outline-dark">Volver a pagina principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    console.log(cart)
  return (
    <div className='table-responsive'>
        <table className=' table align-middle'>
            <thead className='m-5'>                
                <tr className='table-warning'>
                    <th className='table-warning'>Producto</th>
                    <th className='table-warning'>Cantidad</th>
                    <th className='table-warning'>Precio</th>
                    <th className='table-warning'>Eliminar</th>
                    <th className='table-warning'>Precio Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(producto=>(
                    <tr className='table-warning' key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.quantity}</td>
                        <td>{producto.precio}</td>
                        <td><button className='btn btn-warning' onClick={()=>{removeItem(producto.id)}}>🗑️</button></td>
                        <td></td>
                    </tr>   
                ))}
                <tr className='table-primary'>
                    <td colSpan={1}>Detalle de compra</td>
                    <td>{cartTotal()}</td>
                    <td>${priceTotal()}</td>
                    <td><button className='btn btn-warning' onClick={()=>{clear()}}>🗑️</button></td>
                    <td><button className='btn btn-success'><Link to='/checkout'>finalizar compra</Link></button></td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default Cart