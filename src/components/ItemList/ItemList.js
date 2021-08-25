import React from 'react';

import "./ItemList.css";

import { Item } from '../Item/Item';

const ItemList = (props) => {

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

export default ItemList;