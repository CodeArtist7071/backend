// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4AgCG0Un3V0SVSzsN9LpvPmI6lg11Cfw",
  authDomain: "backend-6e519.firebaseapp.com",
  projectId: "backend-6e519",
  storageBucket: "backend-6e519.appspot.com",
  messagingSenderId: "438315686584",
  appId: "1:438315686584:web:8b527aae14ff2cf0c3b24d",
  measurementId: "G-PWY5ZK19EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);