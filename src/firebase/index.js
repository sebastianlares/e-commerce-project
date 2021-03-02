import firebase from "firebase/app";
import "@firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCStGrCCTBw760-VyqpdcYa4QE0pLb2p-Q",
  authDomain: "coder-e-commerce.firebaseapp.com",
  projectId: "coder-e-commerce",
  storageBucket: "coder-e-commerce.appspot.com",
  messagingSenderId: "166405162002",
  appId: "1:166405162002:web:8ebf150c417cdce41144cb",
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
