import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMEs_agVDT8xacs9qLrjq1288v3aeuyR4",
  authDomain: "kimkelen-e0bca.firebaseapp.com",
  projectId: "kimkelen-e0bca",
  storageBucket: "kimkelen-e0bca.appspot.com",
  messagingSenderId: "689897857022",
  appId: "1:689897857022:web:e0fb03657bb6400b30aaaf"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
