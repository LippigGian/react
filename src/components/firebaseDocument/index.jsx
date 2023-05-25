import {getFirestore, doc, getDoc} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

//ejemplo para acceder a UN documento, esto se utilizaria en realidad para un Detail
const FirebaseDocument = () => {

    const[product, setProduct] = useState();
    const[msg, setMsg] = useState("Cargando..."); 

    useEffect(()=>{
        const db = getFirestore();
        const docRef = doc(db, "items", "BvCehMPhFUtk2klI5YrI" )
        getDoc(docRef).then((doc)=> {
            if(doc.exists()){
                setProduct( {id:"",...doc.data()});
            }else{
                setMsg("No hay datos ")
            }
        })
    },[])

    console.log(product)

    if(!product)
    {
        return (<p>{msg}</p>)
    }

    return(
        <>
        <div>hola mundo firebasense</div>
        <h2>{product.nombre}</h2>
        <h2>{product.desc}</h2>
        <img src={product.imagen} alt={product.nombre}></img>
        <h2>{product.precio}</h2>
        <h2>{product.stock}</h2>
        <h2>{product.tipo}</h2>
        </>
        
    )
}
export {FirebaseDocument}