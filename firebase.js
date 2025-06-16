// firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, onValue, remove, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB40xC2Q3ANNkZy2pbFT0d6LAZTn9YYINE",
  authDomain: "gixgame.firebaseapp.com",
  projectId: "gixgame",
  storageBucket: "gixgame.firebasestorage.app",
  messagingSenderId: "808321553860",
  appId: "1:808321553860:web:d95a7bcab2b3af49308091"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue, remove, push };
