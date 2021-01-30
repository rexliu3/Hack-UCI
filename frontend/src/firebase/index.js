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
const firestore = firebase.firestore();


export {auth, provider};

export default {
  firebase, db
}

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL, uid } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        uid,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};