import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="productsContainer">
      {products.map((product) => {
        return <Item product={product} key={product.id} {...product}></Item>;
      })}
    </div>
  );
};

export default ItemList;
