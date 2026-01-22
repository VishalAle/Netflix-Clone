import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCMW9soE-m1RXbqE8mRoMp40kv3wCUK5X0",
  authDomain: "netflix-clone-33fdc.firebaseapp.com",
  projectId: "netflix-clone-33fdc",
  storageBucket: "netflix-clone-33fdc.firebasestorage.app",
  messagingSenderId: "945463915851",
  appId: "1:945463915851:web:ab42013b1d9c66ae35a4ce",
  measurementId: "G-HC7NC60FR9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
