import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css'
import App from './App';

const firebaseConfig = {
    apiKey: "AIzaSyCzbB9gkQbCxNxuR_127SjE-OodATLC3sw",
    authDomain: "proyectofinal-anaya.firebaseapp.com",
    projectId: "proyectofinal-anaya",
    storageBucket: "proyectofinal-anaya.appspot.com",
    messagingSenderId: "351129558732",
    appId: "1:351129558732:web:2f1b821cf05a256b82ec69"
};

  // Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);