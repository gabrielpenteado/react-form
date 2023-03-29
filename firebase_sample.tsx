// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  // apiKey: ... ,
  // authDomain: ... ,
  // projectId: ... ,
  // storageBucket: ... ,
  // messagingSenderId: ... ,
  // appId: ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);