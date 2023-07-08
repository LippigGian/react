import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc,doc, getFirestore } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseconfig'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const id = useParams().id;
  const [msg, setMsg] = useState("Cargando...");
  console.log(id)
  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        setProduct({ id: doc.id, ...doc.data() });
      } else {
        setMsg("No se encontraron productos ");
      }
    });
    //no estoy seguro si debe actualizarse con el cambio del id
  }, [id]);



  // useEffect (()=>{
  //    const docRef=doc(db,'productos',id)
  //    getDoc(docRef)
  //    .then(response=>{
  //     const data=response.data()
  //     const productsAdapted={id:response.id, ...data}
  //     setProduct(productsAdapted)

  //   })
  // },[id]);



  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer