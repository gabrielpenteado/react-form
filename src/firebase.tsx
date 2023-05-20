// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD46EBiAQX53LmXlKSYcEVlUFgib6fqNBw",
  authDomain: "freedatabasereactform.firebaseapp.com",
  projectId: "freedatabasereactform",
  storageBucket: "freedatabasereactform.appspot.com",
  messagingSenderId: "340718458007",
  appId: "1:340718458007:web:fa3c64effa06bd1f3505d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);