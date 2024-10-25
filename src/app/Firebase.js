// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSKSq3FJKdAsTcGPuRcTQL8tggbHQN1pk",
  authDomain: "multimix-ac9b7.firebaseapp.com",
  projectId: "multimix-ac9b7",
  storageBucket: "multimix-ac9b7.appspot.com",
  messagingSenderId: "913091799271",
  appId: "1:913091799271:web:f2c38ed2b098aadaab5a42",
  measurementId: "G-TP9MBKNZMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);