import React from 'react';
import "./ItemList.css";

import { Item } from '../Item/Item';

export const ItemList = (props) => {

    return (
        <div className="ItemList-Container">
            {
                props.items.map((item) => {
                    return (
                        <Item item={item} key={item.id} />
                    )
                })
            }
        </div>
    )
};
