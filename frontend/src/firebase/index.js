import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyBtmmlfbbVOYfwL5sTJtPx6zyuRpl34CKc",
    authDomain: "hackuci-ac4d9.firebaseapp.com",
    projectId: "hackuci-ac4d9",
    storageBucket: "hackuci-ac4d9.appspot.com",
    messagingSenderId: "959798035499",
    appId: "1:959798035499:web:dad26188af2e93eb6d166e",
    measurementId: "G-C6SP7N9SFR"
});

let db = firebase.firestore()
let auth = firebase.auth()
let provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider};

export default {
  firebase, db
}