import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzbB9gkQbCxNxuR_127SjE-OodATLC3sw",
  authDomain: "proyectofinal-anaya.firebaseapp.com",
  projectId: "proyectofinal-anaya",
  storageBucket: "proyectofinal-anaya.appspot.com",
  messagingSenderId: "351129558732",
  appId: "1:351129558732:web:f9ebde66559a60f882ec69"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);