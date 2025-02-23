import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlRD1FAUEOcNNPkXRb_RmyTL8tJOP_Mt4",
  authDomain: "nbula-public-projects-6f644.firebaseapp.com",
  projectId: "nbula-public-projects-6f644",
  storageBucket: "nbula-public-projects-6f644.firebasestorage.app",
  messagingSenderId: "561739719175",
  appId: "1:561739719175:web:90c640d37866cb919ac0a2",
  measurementId: "G-42T0Q8PDBP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);