// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpGoDCFDPaKve_UBydK4tta4N6QQ15UvM",
  authDomain: "form-database-98e52.firebaseapp.com",
  projectId: "form-database-98e52",
  storageBucket: "form-database-98e52.appspot.com",
  messagingSenderId: "1025964817523",
  appId: "1:1025964817523:web:12be09f4e6a43eec263e06",
  measurementId: "G-E39YB6PJ9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);