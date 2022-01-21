import React from "react";
import Item from "./Item";

function ItemList({ items }) {
    return (
        <>            
            { 
                <Item item={items}></Item>
            }
        </>
    );
}

export default ItemList;