import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {

    return (
        <div className="d-flex flex-row flex-wrap justify-content-evenly">    
            {
            items.map(item => 
                <div key={item.id}>
                <Item item={item} />
                </div>
                )
            }
        </div>
        
    )
}

export default ItemList;