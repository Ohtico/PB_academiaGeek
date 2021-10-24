import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWDVjCDBt5jiM9kv4ysG_z1M2DRiT8pBM",
  authDomain: "gitrepositories-eb1db.firebaseapp.com",
  projectId: "gitrepositories-eb1db",
  storageBucket: "gitrepositories-eb1db.appspot.com",
  messagingSenderId: "678385769432",
  appId: "1:678385769432:web:91c957cf0bc15b4c21f0ad",
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore(app);

export { app, google, facebook, db };
