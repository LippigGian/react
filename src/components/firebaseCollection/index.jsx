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
        <div className="body">
            <div className="productsContainer"> 
        {products.map((product)=>{
            return(
        <div className="card">
            <img className="card-img-top img" src={product.imagen} alt={product.nombre}></img>
            <div className="card-sody">
                <h5 className="card-title">{product.nombre}</h5>
                <h3 className="card-text"> Precio ${product.precio}</h3>
                <h4>{product.categoria}</h4>
                {/* <h2>{product.desc}</h2> */}
                <h2>Stock disponible: {product.stock}</h2>
            </div>
        </div>)
        })}
            </div>
        </div>
    )
}

export {FirebaseCollecion}