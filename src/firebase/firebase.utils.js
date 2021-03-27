import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBcjlV0WrqJYaWTBhsnY5Xutl46o07ewLY",
  authDomain: "crawn-db-73fc6.firebaseapp.com",
  projectId: "crawn-db-73fc6",
  storageBucket: "crawn-db-73fc6.appspot.com",
  messagingSenderId: "973694830569",
  appId: "1:973694830569:web:55e4736de15029c8dd2d78",
  measurementId: "G-JV7DLV5NV7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Checking User in the Database

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("There is an error ", error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
