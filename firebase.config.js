// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAJ_LVvdqfjCef9w9oOg4XX9-g3yJsDOI",
  authDomain: "react-native-firebase-8aee1.firebaseapp.com",
  projectId: "react-native-firebase-8aee1",
  storageBucket: "react-native-firebase-8aee1.appspot.com",
  messagingSenderId: "562905757567",
  appId: "1:562905757567:web:438e8ed161f5b954850c4a",
  measurementId: "G-0C1TQBQRMB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
