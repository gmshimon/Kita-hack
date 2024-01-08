import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjRl1kMGRxz_kTEvpmlmV2xPDLWj1eeA8",
  authDomain: "kitahack-ba4e9.firebaseapp.com",
  projectId: "kitahack-ba4e9",
  storageBucket: "kitahack-ba4e9.appspot.com",
  messagingSenderId: "734661816024",
  appId: "1:734661816024:web:e52574c482752d5f3fb1ad",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default auth;
