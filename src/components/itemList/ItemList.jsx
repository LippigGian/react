import { Item } from "../item/Item"
import { ItemCount } from "../itemCount"

export const ItemList = ({products})=> {
return(
    <>
    <div className="productsContainer">
    {products.map((product) =>{
        return(
            <>
        <Item key={product.id}{...product}></Item>
        {/* <ItemCount cantidad = {product.cantidad}></ItemCount> */}
        </>
        )
    } )}
     
    </div>
    
    </>
    
)
}



/*ESTE FUNCIONA 

  {products.map(product => <Item key={product.id}{...product}></Item>)}
  */