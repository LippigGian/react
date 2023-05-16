import { useEffect, useState } from "react"
import {pedirItemPorId} from "../../asyncMock"
import { ItemDetail } from "../itemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
/*useParams nos devuelve el valor despues del / en la barra de navegacion pero nos los devuelve como objeto, por eso aplico el ".id". 
Ahora nos devuelve un string por eso lo transformamos a number*/
const id = useParams().id;
    const [item, setItem] = useState(null)

    useEffect(() => {
        pedirItemPorId(Number(id))
        .then((res)=>{
            setItem(res)
           
        })}, [id])
 
    return(
        <div>
            { item &&
         <ItemDetail item={item}></ItemDetail>
        }
        </div>
    )


}

export {ItemDetailContainer}