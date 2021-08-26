import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import itemsArray from "../../utils/itemsArray";

function ItemDetailContainer() {

  const [getItems, setGetItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const getItemsPromise = new Promise((resolve, error) => {
      setTimeout(() => {
        const itemFound = itemsArray.find(
          (item) => item.id === +itemId
        );
        resolve(itemFound);
      }, 2000);
    });

    getItemsPromise
      .then((itemsArray) => {
        setGetItems(itemsArray);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <h1>Loading...</h1>;

  return <ItemDetail getItems={getItems} />

};

export default ItemDetailContainer;