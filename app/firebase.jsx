// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhlQeHj69mEqWXYoUX33wwvvm6kFE6XJA",
  authDomain: "next-auth-edc1a.firebaseapp.com",
  projectId: "next-auth-edc1a",
  storageBucket: "next-auth-edc1a.appspot.com",
  messagingSenderId: "389266143635",
  appId: "1:389266143635:web:bf4c6cf1056a1ffb2b9066",
  measurementId: "G-KSC0MVFCGC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;
// const analytics = getAnalytics(app) we have to povided weather the window is defined or not to do that see above code
export const auth = getAuth(app)

