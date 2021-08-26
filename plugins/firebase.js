// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuVzCUQst_QZwfqgM1ABD04LPVVGkZpLU",
  authDomain: "snsapp-8b3b8.firebaseapp.com",
  projectId: "snsapp-8b3b8",
  storageBucket: "snsapp-8b3b8.appspot.com",
  messagingSenderId: "405080173138",
  appId: "1:405080173138:web:58905c2f3f50ba55478d8b",
  measurementId: "G-C88DGRSB8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
