import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvpJ-QDIor8WzErElhpBUhirYVLo38ggs",
  authDomain: "okinawaconnectdocs.firebaseapp.com",
  projectId: "okinawaconnectdocs",
  storageBucket: "okinawaconnectdocs.appspot.com",
  messagingSenderId: "514411124430",
  appId: "1:514411124430:web:85895eebb7cf9f0ab0629f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };