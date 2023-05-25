import { useContext } from "react";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";

const ShoppingCart = () =>
{
    const [cart, setCart] =useContext(CartContext);
    const quantity = cart.reduce((acc, currentItem ) => {
  return acc + currentItem.quantity;
    },0 );

    const totalPrice = cart.reduce((acc, currentItem) =>{
    return acc+ currentItem.precio * currentItem.quantity},0)
    return(
        <>
        <h3>items in cart: {quantity}</h3>
        <h3>total pricet: {totalPrice}</h3>
        </>
    )
}

export {ShoppingCart}