import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { query, collection, where, getDocs } from 'firebase/firestore';
import { collection, getDocs, where, query, getFirestore } from "firebase/firestore";
import {db} from '../services/firebase/firebase'

const ItemListContainer = () => {
  const [products, setProducts] = useState();
  // const [prods,setProds]= useState([]);
  const {categoryId}=useParams()


  useEffect(() => {
    // const db = getFirestore();
    const collectionRef= categoryId ?query(collection(db,'items'), where ('categoria',"==", categoryId))
      : collection (db, 'items')
  
    // const collectionRef = collection(db, "items");
    getDocs(collectionRef).then((querySnapshot) => {
      //aqui en setProducts nos llega un array "raro" de leer.
      //al ser collection y no product necesitaré hacer un map.
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, [categoryId]);

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
      {categoryId? <h1 className="text-center m-2">Categoria: {categoryId}</h1> : <h1 className="text-center m-2">¡Bienvenidos a la tienda !</h1>}
        
        <ItemList products={products} />
        
    </div>
  )
}

export default ItemListContainer