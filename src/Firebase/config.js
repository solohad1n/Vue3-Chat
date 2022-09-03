import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD1YEQTfcgf9Fp6NFcAFJ4X2R5sZNHgDyU",
  authDomain: "vue3-chat-e306a.firebaseapp.com",
  projectId: "vue3-chat-e306a",
  storageBucket: "vue3-chat-e306a.appspot.com",
  messagingSenderId: "855821783449",
  appId: "1:855821783449:web:99cd49637af89125580308"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const auth = getAuth(app)
export const timestamp = serverTimestamp(app)