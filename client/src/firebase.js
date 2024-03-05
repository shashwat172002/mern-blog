// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b16f1.firebaseapp.com",
  projectId: "mern-blog-b16f1",
  storageBucket: "mern-blog-b16f1.appspot.com",
  messagingSenderId: "562921397447",
  appId: "1:562921397447:web:7be0f11d78bced166272e2",
  measurementId: "G-BVLDVR4GYD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);