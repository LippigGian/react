import { Item } from "../item/Item"

export const ItemList = ({products})=> {
return(
    <>
    <div className="productsContainer">

    {products.map((product) =>{
        return(
        <Item key={product.id}{...product}></Item>
        )
    } )}
    </div>
    </>  
)
}
