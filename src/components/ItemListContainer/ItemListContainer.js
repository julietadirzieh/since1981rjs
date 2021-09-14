import React, { useState, useEffect } from 'react';
import {ItemList} from '../ItemList/ItemList';
import { db } from "../../firebase"
import { collection, query, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  const getItems = async () => {
    const docs = [];
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setItems(docs);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <ItemList items={items} />
    </div>
  )

};
