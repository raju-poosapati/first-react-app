import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfKvnp1xpGbYliyfKcBqw4p9WT-M6CO5U",
  authDomain: "first-react-project-6e8a3.firebaseapp.com",
  projectId: "first-react-project-6e8a3",
  storageBucket: "first-react-project-6e8a3.appspot.com",
  messagingSenderId: "1097033820422",
  appId: "1:1097033820422:web:6fc1c3ab303e7e86751687",
  measurementId: "G-FJ1MPR6RY8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const firestore = firebase.firestore();

export default firebase;
