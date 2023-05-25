import { useEffect } from "react"
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { useState } from "react"

//ejemplo de firebase para una collection




//collectionRef el profe lo usó con la primera C en mayuscula
const FirebaseCollecion = () =>
{
    const [products, setProducts] = useState();
    useEffect(()=>{
        const db =getFirestore();
        const collectionRef = collection(db, "items")
        getDocs(collectionRef).then((querySnapshot)=>{
            //aqui en setProducts nos llega un array "raro" de leer.
            //al ser collection y no product necesitaré hacer un map.
            setProducts(querySnapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
        })

    },[])
    console.log(products )
    if(!products){
        return(
            <h2>Cargando...</h2>
        )
    }
    return(
        <>
        <div>Hola firebaseCollecion</div>
        {products.map((product)=>{
            return(
                <>
        <h2>{product.nombre}</h2>
        <h2>{product.desc}</h2>
        <img src={product.imagen} alt={product.nombre}></img>
        <h2>{product.precio}</h2>
        <h2>{product.stock}</h2>
        <h2>{product.tipo}</h2>
        </>)
        })}
        </>
    )
}

export {FirebaseCollecion}