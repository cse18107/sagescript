// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sagescript-blog.firebaseapp.com",
  projectId: "sagescript-blog",
  storageBucket: "sagescript-blog.appspot.com",
  messagingSenderId: "785993795475",
  appId: "1:785993795475:web:e8dcfa027997f48b318a66",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
