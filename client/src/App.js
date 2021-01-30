import React, {useEffect, useState} from 'react';
import axiox from 'axios'
import firebase from "firebase";
require('firebase/functions');
firebase.initializeApp({
  apiKey: "AIzaSyBtmmlfbbVOYfwL5sTJtPx6zyuRpl34CKc",
  authDomain: "hackuci-ac4d9.firebaseapp.com",
  projectId: "hackuci-ac4d9",
  storageBucket: "hackuci-ac4d9.appspot.com",
  messagingSenderId: "959798035499",
  appId: "1:959798035499:web:dad26188af2e93eb6d166e",
  measurementId: "G-C6SP7N9SFR"
});
const functions = firebase.functions();

const App = () => {
  const sendText = e => {
    console.log('hi')
    const sayHello = firebase.functions().httpsCallable('sayHello')
    sayHello().then(m => console.log('success')).catch((err) => console.log('error'));
  }

  return (
    <div>
      <button onClick={sendText}>Send</button>
    </div>
  );
};

export default App;