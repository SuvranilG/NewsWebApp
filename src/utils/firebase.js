// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "newsapp-c250b.firebaseapp.com",
  projectId: "newsapp-c250b",
  storageBucket: "newsapp-c250b.appspot.com",
  messagingSenderId: "173828907855",
  appId: "1:173828907855:web:b20e620de6a8b342d71b3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);