import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAPHPiK9tz7l6uvhlXZxMWDnxNYesgXx8g",
  authDomain: "crown-db-6f952.firebaseapp.com",
  databaseURL: "https://crown-db-6f952.firebaseio.com",
  projectId: "crown-db-6f952",
  storageBucket: "crown-db-6f952.appspot.com",
  messagingSenderId: "111314357757",
  appId: "1:111314357757:web:e611a49d27bf15a6f59d94",
  measurementId: "G-TREPNBW91C",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
