
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDtJOveFbI5LWNrf7MdzboPFOx-m_fvRz4",
  authDomain: "mockmate-8a79f.firebaseapp.com",
  projectId: "mockmate-8a79f",
  storageBucket: "mockmate-8a79f.firebasestorage.app",
  messagingSenderId: "663769559164",
  appId: "1:663769559164:web:8518624a710a2cd00bd9f9",
  measurementId: "G-BSQSCCJ44E"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);
