import React, { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { db } from "../../firebase"
import { collection, query, where, getDocs } from "firebase/firestore";

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

  const getLisasCategory = async () => {
    const docs = [];
    const q = query(collection(db, "items"), where("categoryId", "==", "lisas"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setItems(docs);
  };

  const getEstampadasCategory = async () => {
    const docs = [];
    const q = query(collection(db, "items"), where("categoryId", "==", "estampadas"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setItems(docs);
  };

  return (
    <div>
      <button onClick={getLisasCategory}>Telas lisas</button>
      <button onClick={getEstampadasCategory}>Telas estampadas</button>
      <ItemList items={items} />
    </div>
  )

};
