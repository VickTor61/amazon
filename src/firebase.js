// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBGKlCnTvWu__wGUwN7arp-4SYzgZrvV-g",
    authDomain: "clone-39bf0.firebaseapp.com",
    projectId: "clone-39bf0",
    storageBucket: "clone-39bf0.appspot.com",
    messagingSenderId: "857747538032",
    appId: "1:857747538032:web:7d4a4c7002319aa5d4b4b5",
    measurementId: "G-VGVDHE6W82"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth}; 