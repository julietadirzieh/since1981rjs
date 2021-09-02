import React, { useState, useEffect } from 'react';
import {ItemList} from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import itemsArray from "../../utils/itemsArray";

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const promiseItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        categoryId ?
          resolve(itemsArray.filter(e => e.category === categoryId))
          :
          resolve(itemsArray)
      }, 2000)
    })

    promiseItems.then((itemsArray) => setItems(itemsArray));
  }, [categoryId]);


  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};


