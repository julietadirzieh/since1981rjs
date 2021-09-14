import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLE5UtcoETY2EFSn7k3eeUoQocmYiPSLs",
    authDomain: "since-1981.firebaseapp.com",
    projectId: "since-1981",
    storageBucket: "since-1981.appspot.com",
    messagingSenderId: "869074804824",
    appId: "1:869074804824:web:6845b96450f82fb6072a2d",
    measurementId: "G-E7MMLGZLJ6"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);