import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDilwu_-MiyxO1ryW4YYEbGDlBfgWpnE4Q",
  authDomain: "ecommshop-16e92.firebaseapp.com",
  projectId: "ecommshop-16e92",
  storageBucket: "ecommshop-16e92.appspot.com",
  messagingSenderId: "1047507090238",
  appId: "1:1047507090238:web:2fc9c3be2ac0e315d78a6f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
