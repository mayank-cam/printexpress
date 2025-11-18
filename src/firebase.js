// src/firebase.js  (IMPORTANT: keep name firebase.js not firebase.jsx)

import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut as fbSignOut 
} from "firebase/auth";

// TODO: replace these values with your Firebase project config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize
const app = initializeApp(firebaseConfig);

// Create Auth Instance
const auth = getAuth(app);

// Google Provider
const provider = new GoogleAuthProvider();

// Login
export function signInWithGoogle() {
  return signInWithPopup(auth, provider);
}

// Logout
export function signOut() {
  return fbSignOut(auth);
}

export { auth };
