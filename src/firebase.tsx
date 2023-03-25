// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBcuFeTS9nS6ujr043NwkiQGl9YJQ9YwJM",
  authDomain: "freedatabaseform.firebaseapp.com",
  projectId: "freedatabaseform",
  storageBucket: "freedatabaseform.appspot.com",
  messagingSenderId: "750827951023",
  appId: "1:750827951023:web:2f8437599abc3df61e555a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);