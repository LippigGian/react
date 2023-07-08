import React from 'react';
import Item from './Item';


const ItemList = ({products}) => {


  // if (!products) {
  //   return (
  //     <div className="containerLoader">
  //       <h2>Cargando...</h2>
  //       <div className="spinner"></div>
  //     </div>
  //   );
  // }
  return (
    // <div className="containerCard card-group aline-items-center">
    //   {products.map((item, id) =>(
    //     <Item 
    //     key={id}
    //     category={item.category}
    //     title={item.title} 
    //     id={item.id}
    //     description={item.description}
    //     price={item.precio}
    //     stock={item.stock}
    //     pictureURL={item.imagen}/>
    //   ))}
    // </div>


    <div className="productsContainer">
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              {...product}
              // removeItem={removeItem}
              // addToCart={addToCart}
            ></Item>
          );
        })}
      </div>
  )
}

export default ItemList