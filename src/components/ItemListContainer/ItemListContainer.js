import React, { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { db } from "../../firebase"
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    getFilteredItems(categoryId)
      .finally(() => setLoading(false));
  }, [categoryId]);

  const queryBuilder = (category, id) => {
    if (category) {
      return query(collection(db, "items"), where("categoryId", "==", category.toLowerCase()));
    } else {
      return query(collection(db, "items"));
    }
  };

  const getFilteredItems = async (category) => {
    const docs = [];
    const q = queryBuilder(category);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setItems(docs);
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <ItemList items={items} key={items.id}/>
    </div>
  )

};
