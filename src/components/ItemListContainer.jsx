import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { query, collection, where, getDocs } from 'firebase/firestore';
import { collection, getDocs, where, query, getFirestore } from "firebase/firestore";
import {db} from '../services/firebase/firebaseconfig'

const ItemListContainer = ({greeting}) => {
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

  // useEffect (()=>{
  //   const collectionRef= categoryId
  //   ?query(collection(db,'productos'), where ('categoryId',"==", categoryId))
  //   : collection (db, 'productos')

  //   getDocs(collectionRef)
  //     .then (response=>{
  //       const productsAdapted=response.docs.map((doc) => {
  //         const data = doc.data()
  //         return {id:doc.id,...data}
  //       })
  //       setProds(productsAdapted)
  //     })
  //     .catch(error=>{
  //     console.log (error)
  //     })
  // },[categoryId])

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
        <h1 className="text-center m-2">{greeting}</h1>
        <ItemList products={products} />
        
    </div>
    // products.map((product) => {
    //   return (
    //     <h2>{product.nombre}
    //     </h2>
    //   );
    // })
  )
}

export default ItemListContainer