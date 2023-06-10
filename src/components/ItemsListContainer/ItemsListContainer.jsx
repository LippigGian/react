import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { ItemList } from "../itemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "items");
    getDocs(collectionRef).then((querySnapshot) => {
      //aqui en setProducts nos llega un array "raro" de leer.
      //al ser collection y no product necesitaré hacer un map.
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  if (!products) {
    return (
      <div className="containerLoader">
        <h2>Cargando...</h2>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="body">
      <h1>¡Bienvenidos a la tienda!</h1>
      <ItemList products={products} key={products.id}></ItemList>
    </div>
  );
};
