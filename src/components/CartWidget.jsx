import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'



import cart from "../Assets/icon-cart.png"

export const CartWidget = () => {
  const {cartTotal}=useContext(CartContext)
  return (
    <Link to="/Cart">
      <img src={cart} alt="cart-widget"></img>
      <span className="text-dark ">({cartTotal()})</span>
      </Link>
  );
};

// otro boludito 
// const CartWidget = () => {

//   const {totalQuantity} = useContext (CartContext)

//   return (
//       <Link to='/Cart' className="CartWidget" >
          

//           <img className="CartImg" src={cart} alt='cart-widget' />
//           {totalQuantity()}
          
//       </Link>
//   )

// }



//boludita


// const CartWidget = () => {
//   const {cartTotal}=useContext(CartContext)
//   return (
//     <>
//         <button type="button" className="btn btn-secondary"><Link to='/cart'>🛒</Link>
//            <span className="badge bg-secondary">{cartTotal()}</span>
//         </button>
//     </>
//   )
// }

export default CartWidget