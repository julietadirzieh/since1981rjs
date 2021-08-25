import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import itemsArray from "../../utils/items";

const ItemListContainer = () => {
  // estado donde voy a tener los items
  const [items, setItems] = useState([]);
  const {categoryId} = useParams();

  // promesa que devuelve un array con los items en tiempo diferido
  useEffect(()=>{
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
    <ItemList items={items}/>
      </div>
    );
  };

  export default ItemListContainer;

