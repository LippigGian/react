import React, { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const category = useParams().category;

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (category) {
          setProducts(res.filter((prod) => prod.categoria === category));
          setTitulo(category);
        } else {
          setProducts(res);
          setTitulo("Productos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <div className="body">
      <h1>{greeting}</h1>
      <h2 className="title">{titulo}:</h2>

      <ItemList products={products} key={products.id}></ItemList>
    </div>
  );
};
