import { useState } from "react"
import productos from "../../datos/productos"
import CardItem from "../CardItem/CardItem"


function ItemListContainer(props) {
    
    const [items] =useState(productos);
    
    return (
        <>
       {items.map(function(item){
        return <CardItem item={item}/>
       })}
       </>
    )
}
export default ItemListContainer