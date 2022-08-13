// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAeMlYvwSL4vlGpH0T7NbqsbBzBFoc01E",
  authDomain: "health-hub-de64d.firebaseapp.com",
  projectId: "health-hub-de64d",
  storageBucket: "health-hub-de64d.appspot.com",
  messagingSenderId: "684292140590",
  appId: "1:684292140590:web:ce4557c6393309aa45f9bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
export const google = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
