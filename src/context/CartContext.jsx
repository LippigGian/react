import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
//  const [cantidad, setCantidad] = useState(0);
const [cantidad, setCantidad] = useState(0);

    const [ cart, setCart ] = useState([])
    console.log (cart)

    //chequear si dentro del carrito existe
    const isInCart = (id) => {
        return cart.some(pr => pr.id === id)
    }

    // const addItem = (product, quantity) => {
    //     if(!isInCart(product.id)){
    //         setCart(prev=>[...prev,{...product,quantity}])
    //     }else {
    //         console.log("el producto ya fue agregado al carrito")
    //     }
    // }


    // IA
    const addItem = (product, quantity) => {
        if (!isInCart(product.id)) {
          setCart(prev => [...prev, { ...product, quantity }]);
        } else {
          setCart(prev =>
            prev.map(item => {
              if (item.id === product.id) {
                return { ...item, quantity: item.quantity + quantity };
              }
              return item;
            })
          );
        }
      };
      
      
    //gian modificado

    // const addItem = (nombre, precio, id,  quantity) => {
    //     console.log(id)
    //     setCantidad(0);
    //     setCart((currentItems) => {
    //       const isItemsFound = currentItems.find((item) => item.id === id);
    //       if (isItemsFound) {
    //         return currentItems.map((item) => {
    //           if (item.id === id) {
    //             return { ...item, quantity: item.quantity + quantity, nombre};
    //           } else {
    //             return item;
    //           }
    //         });
    //       } else {
    //         return [...currentItems, { id, quantity: quantity, precio, nombre }];
    //       }
    //     });
    //   };

    //   const addToCart = (nombre, precio, id, quantity) => {
    //     console.log(quantity)
    //     setCantidad(0);
    //     setCart((currentItems) => {
    //       const isItemsFound = currentItems.find((item) => item.id === id);
    //       if (isItemsFound) {
    //         return currentItems.map((item) => {
    //           if (item.id === id) {
    //             return { ...item, quantity: item.quantity + quantity, nombre };
    //           } else {
    //             return item;
    //           }
    //         });
    //       } else {
    //         return [...currentItems, { id, quantity: quantity, precio, nombre }];
    //       }
    //     });
    //   };

      
      

    const removeItem = (id) => {
        const products = cart.filter(pr => pr.id !== id)
        setCart([...products])
        console.log ("eliminando...")
    }

    const clear = () => {
        setCart([])
        console.log ("limpiando")
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.quantity, 0)
    }

    const priceTotal = () => {
        return cart.reduce((total, item) => total += item.quantity * item.precio , 0)
    }

    return (
        <CartContext.Provider value={{cart,setCart, addItem, removeItem, clear,cartTotal, priceTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider