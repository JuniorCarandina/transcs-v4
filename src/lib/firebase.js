import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZS3LQDs61IsHjJ90jbH0Bi9IPbTIXm78",
  authDomain: "transcsv4.firebaseapp.com",
  projectId: "transcsv4",
  storageBucket: "transcsv4.firebasestorage.app",
  messagingSenderId: "129389313909",
  appId: "1:129389313909:web:ccc438a4802568d4975d3c",
  measurementId: "G-WSQJLVVPDZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };