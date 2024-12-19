// FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2-eyxGJdNGKpKWg8RkGyE_VGGjvAik4g",
  authDomain: "myfirstproject-d0c4f.firebaseapp.com",
  projectId: "myfirstproject-d0c4f",
  storageBucket: "myfirstproject-d0c4f.appspot.com",
  messagingSenderId: "521646430700",
  appId: "1:521646430700:web:05024cc5c05ac729f748c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
export const auth = getAuth(app);
