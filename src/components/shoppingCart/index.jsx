import { useContext } from "react";
import { CartContext } from "../shoppingCartContext/ShoppingCartContext";

const ShoppingCart = () => {
  
  const [cart, setCart] = useContext(CartContext);
  // console.log(cart)
  const quantity = cart.reduce((acc, currentItem) => {
    return acc + currentItem.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, currentItem) => {
    return acc + currentItem.precio * currentItem.quantity;
  }, 0);


  return (
      <div className="body-cart d-flex flex-column">
      <h3 className="text-center">Items en el carrito: {quantity}</h3>      
      <table className="table" border="1">
              <thead>
                <tr>
                  <th>
                    Producto
                  </th>
                  <th>
                    Cantidad
                  </th>
                  <th>
                    Precio unitario
                  </th>
                  <th>
                    Importe
                  </th>
                </tr>
              </thead>
              <tbody>
              {cart.map((product)=>{
          return(
            <>
          <tr>
          <td>{product.nombre}</td>
          <td>{product.quantity}</td>
          <td>{product.precio}</td>
          <td>{product.precio*product.quantity}</td>
          </tr>
            </>
                )
              })}
              </tbody>
            </table>
      <div>
      </div>
      <h3 className="text-center">Precio final: {totalPrice}</h3>
      <button type="button" class="btn btn-success m-auto" onClick={()=>{setCart([])}}>CheckOut</button>
      </div>
  );
};

export { ShoppingCart };
