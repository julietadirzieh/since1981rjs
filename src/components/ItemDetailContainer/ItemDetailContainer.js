import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../firebase"
import { collection, query, getDocs } from "firebase/firestore";

export const ItemDetailContainer = () => {

  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("itemdet", itemDetail);

  const getItemDetail = async () => {
    const docs = [];
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setItemDetail(docs);
  };

  useEffect(() => {
    getItemDetail()
    .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {itemDetail.map((item)=> {
        return<ItemDetail item={item} key={item.id} />}) 
      } 
    </div>
  )

};
