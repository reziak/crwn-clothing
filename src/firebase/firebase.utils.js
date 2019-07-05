import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCV26zlqfxyer40Ab03viuJkQ1D963SSS4",
  authDomain: "crwn-clothing-e75d5.firebaseapp.com",
  databaseURL: "https://crwn-clothing-e75d5.firebaseio.com",
  projectId: "crwn-clothing-e75d5",
  storageBucket: "",
  messagingSenderId: "1049089152541",
  appId: "1:1049089152541:web:d7ac840e6f1d2a21"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
