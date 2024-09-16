import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa5tZNLkcmSn6emO6ojx8QWO3u3Uwbli4",
  authDomain: "student-1344f.firebaseapp.com",
  projectId: "student-1344f",
  storageBucket: "student-1344f.appspot.com",
  messagingSenderId: "315141419256",
  appId: "1:315141419256:web:cc1a6392321a14510d0b0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication, Firestore, and Storage
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

// Set persistence for authentication to be local, so the user stays logged in across sessions
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Now sign-in will be persistent across tabs and browser sessions
    console.log('Persistence set to local');
  })
  .catch((error) => {
    console.error('Error setting persistence:', error);
  });

export { auth, db, storage }; // Export auth, db, and storage
