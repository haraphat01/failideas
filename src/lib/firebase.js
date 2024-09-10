import { initializeApp } from 'firebase/app'; // Updated import
import { getFirestore } from 'firebase/firestore'; // Updated import
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // Import Auth and Google Provider

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig); // Initialize app
const firestore = getFirestore(app); // Get Firestore instance
const auth = getAuth(app); // Initialize Auth

export { firestore, auth }; // Export Firestore and Auth
export const googleProvider = new GoogleAuthProvider(); // Initialize Google Provider
