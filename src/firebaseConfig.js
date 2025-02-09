import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCl8gGMn3-kzEt8_EKWB-nax77EtExYOw0",
  authDomain: "chat-app-96bdb.firebaseapp.com",
  projectId: "chat-app-96bdb",
  storageBucket: "chat-app-96bdb.firebasestorage.app",
  messagingSenderId: "617219235543",
  appId: "1:617219235543:web:65f41f2a58ff89bb9eda92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const firebaseApp = auth;
export default firebaseApp;