import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
            {   
                items.sort ((a, b) => {
                    if(a.nombre > b.nombre) {
                        return 1;
                    }
                    if(a.nombre < b.nombre) {
                        return -1;
                    }

                    return 0;

                }).sort ((a, b) => {
                    if(a.categoria > b.categoria) {
                        return 1;
                    }
                    if(a.categoria < b.categoria) {
                        return -1;
                    }

                    return 0;

                }).map(item =>
                    <div className="col-md-4" key={item.id}>
                        <Item item={item} />
                    </div>
                )
            }
        </div>
    )
}

export default ItemList;