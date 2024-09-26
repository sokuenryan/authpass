  // Import necessary functions from Firebase SDKs
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBy_pj699e28UOgGCRMjvnJIG7nkCOuyS0",
  authDomain: "authpass-id.firebaseapp.com",
  projectId: "authpass-id",
  storageBucket: "authpass-id.appspot.com",
  messagingSenderId: "556943406652",
  appId: "1:556943406652:web:46b836b0a03998bd017539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Analytics for Firebase (if needed)
const analytics = getAnalytics(app);

export { app, auth, analytics };