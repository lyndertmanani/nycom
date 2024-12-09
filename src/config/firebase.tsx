// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore

 
const firebaseConfig = {
  apiKey: "AIzaSyC1sYrKa1rCIBIji1sM7-DpqterPOlawmo", // Correct API key for nyom project
  authDomain: "nyom.firebaseapp.com", // Use the correct authDomain for nyom project
  projectId: "nyom-e1948", // Project ID for the 'nyom' project
  storageBucket: "nyom.appspot.com", // Storage bucket for nyom project
  messagingSenderId: "1030745916829", // Sender ID for nyom project
  appId: "1:1030745916829:web:eed1b287764bfaebd744c6", // App ID for nyom project
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth
const db = getFirestore(app); // Initialize Firestore

// Export the auth and db instances
export { auth, db };
