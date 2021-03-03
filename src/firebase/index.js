import firebase from "firebase/app";
import "@firebase/firestore";
import "firebase/auth";

const APIKEY = process.env.REACT_APP_FIREBASE_APIKEY;
const APPID = process.env.REACT_APP_FIREBASE_APPID;
const AUTHDOMAIN = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;

const app = firebase.initializeApp({
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: "coder-e-commerce",
  storageBucket: "coder-e-commerce.appspot.com",
  messagingSenderId: "166405162002",
  appId: APPID,
});

export const getFirebase = () => {
  return app;
};
export const getFireStore = () => {
  return firebase.firestore(app);
};

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
