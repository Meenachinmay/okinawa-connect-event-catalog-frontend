import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiiP227HJwauDlH_5VorBUdnZu-GIQRrc",
  authDomain: "upload-multiple.firebaseapp.com",
  projectId: "upload-multiple",
  storageBucket: "upload-multiple.appspot.com",
  messagingSenderId: "887154303893",
  appId: "1:887154303893:web:a0deca7e93569a3b9c0c9c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };
