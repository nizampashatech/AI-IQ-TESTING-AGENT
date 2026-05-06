
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-agent-201a9.firebaseapp.com",
  projectId: "ai-interview-agent-201a9",
  storageBucket: "ai-interview-agent-201a9.firebasestorage.app",
  messagingSenderId: "134655624280",
  appId: "1:134655624280:web:1b10fcfc32b46ac310762d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}