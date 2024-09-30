import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "enter you api",
  authDomain: "budget-buddy-f6f78.firebaseapp.com",
  projectId: "budget-buddy-f6f78",
  storageBucket: "budget-buddy-f6f78.appspot.com",
  messagingSenderId: "1098965495337",
  appId: "1:1098965495337:web:aef69560ca11b581147638",
  measurementId: "G-YSD8HB2X73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
