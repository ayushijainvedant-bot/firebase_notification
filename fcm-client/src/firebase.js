// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getMessaging} from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv1p7nZX1X5s-B8aPc4c9gf8KtKKenFrQ",
  authDomain: "fcm-learning-60397.firebaseapp.com",
  projectId: "fcm-learning-60397",
  storageBucket: "fcm-learning-60397.firebasestorage.app",
  messagingSenderId: "601250156565",
  appId: "1:601250156565:web:ffd4a68a8e2be2bb947e1c",
  measurementId: "G-87SBQ49FKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);