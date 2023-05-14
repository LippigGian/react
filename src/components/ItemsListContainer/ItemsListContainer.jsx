import React, { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock"
import { ItemList } from "../itemList/ItemList";

export const ItemListContainer = ({greeting}) =>{
    const[products, setProducts]=useState([]);

    useEffect(()=>{
        getProducts()
            .then(res =>{
                setProducts(res)
            })
            .catch(error =>{
                console.log(error)
            })
    },[])
    
    return(
        <div className="body">
            <h1>{greeting}</h1>
            
            <ItemList products={products} key={products.id}></ItemList>
        </div>
    )
}