import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "jabedzaman-guestbook.firebaseapp.com",
  projectId: "jabedzaman-guestbook",
  storageBucket: "jabedzaman-guestbook.appspot.com",
  messagingSenderId: "957362880691",
  appId: "1:957362880691:web:612817d0c5e4de6294f0c6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
