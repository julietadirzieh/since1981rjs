import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../firebase"
import { collection, query, getDocs } from "firebase/firestore";

export const ItemDetailContainer = () => {

  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("itemdet", itemDetail);

  const getItemsDetail = async () => {
    const docs = [];
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setItemDetail(docs);
  };

  const getItemDetail1 = async () => {
    const docs = [];
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    const filteredItem = docs.filter((item) => {
      return item.id === '2NqZeaI3OefMAztkPTU2';
    });
    setItemDetail(filteredItem);
  };

  const getItemDetail2 = async () => {
    const docs = [];
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    const filteredItem = docs.filter((item) => {
      return item.id === '95tF7f088h3phNCVC1E9';
    });
    setItemDetail(filteredItem);
  };

  const getItemDetail3 = async () => {
    const docs = [];
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    const filteredItem = docs.filter((item) => {
      return item.id === 'QhG2ZjfY5o3JOHu3ljQz';
    });
    setItemDetail(filteredItem);
  };

  const getItemDetail4 = async () => {
    const docs = [];
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    const filteredItem = docs.filter((item) => {
      return item.id === 'R3ZB3dCxF3M16fNqHwL9';
    });
    setItemDetail(filteredItem);
  };

  const getItemDetail5 = async () => {
    const docs = [];
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    const filteredItem = docs.filter((item) => {
      return item.id === 'gLjpXLLEH8bqcymXm1F8';
    });
    setItemDetail(filteredItem);
  };

  const getItemDetail6 = async () => {
    const docs = [];
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    const filteredItem = docs.filter((item) => {
      return item.id === 'inXtW1lZjaPhTsrWYcHV';
    });
    setItemDetail(filteredItem);
  };

  useEffect(() => {
    getItemsDetail()
    getItemDetail1()
      //getItemDetail2()
      //getItemDetail3()
      //getItemDetail4()
      //getItemDetail5()
      //getItemDetail6()
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {itemDetail.map((item) => {
        return <ItemDetail item={item} key={item.id} />
      })
      }
    </div>
  )

};
