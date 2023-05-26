import {getFirestore, doc, getDoc} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//ejemplo para acceder a UN documento, esto se utilizaria en realidad para un Detail
const FirebaseDocument = () => {
    const id = useParams().id;
    console.log(id)
    const[product, setProduct] = useState();
    const[msg, setMsg] = useState("Cargando..."); 

    useEffect(()=>{
        const db = getFirestore();
        const docRef = doc(db, "items", id )
        getDoc(docRef).then((doc)=> {
            if(doc.exists()){
                setProduct( {id:"",...doc.data()});
            }else{
                setMsg("No hay datos ")
            }
        })
    },[])

    console.log(product)

    if(!product){
        return(
            <div className="containerLoader">
                <h2>Cargando...</h2>
                <div className="spinner"></div>
            </div>
        )
    }
    return(
        <>
        <div>hola mundo firebasense</div>
        <button ><Link className="nav-link text-white" to="/fbcollection">Volver al listado</Link></button>
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