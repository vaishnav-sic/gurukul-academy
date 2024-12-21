// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD0O8t25r3ZEeZ4YVIYE-cKA4ZmUOGsoI",
  authDomain: "sic-one.firebaseapp.com",
  projectId: "sic-one",
  storageBucket: "sic-one.appspot.com",
  messagingSenderId: "832545775693",
  appId: "1:832545775693:web:ea61ce613b35b868b3bc04",
  measurementId: "G-5ZMWXB5FT8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
export default auth;
