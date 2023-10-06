import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBeq9Ch_NYhQvo-XZ0oglmVIyXhQLZsJwo",
  authDomain: "power-move-13307.firebaseapp.com",
  projectId: "power-move-13307",
  storageBucket: "power-move-13307.appspot.com",
  messagingSenderId: "152290732708",
  appId: "1:152290732708:web:14c679f5d8a2214bbcd431"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {app, auth, db, storage};