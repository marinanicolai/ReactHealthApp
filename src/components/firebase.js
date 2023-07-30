// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl7DEdxQNY9quUsaXrvxv4mBuXbQv0t14",
  authDomain: "healthapp-7f4fc.firebaseapp.com",
  projectId: "healthapp-7f4fc",
  storageBucket: "healthapp-7f4fc.appspot.com",
  messagingSenderId: "399352157271",
  appId: "1:399352157271:web:a226d9922e84fa057eff12",
  measurementId: "G-TBHV5639NN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};