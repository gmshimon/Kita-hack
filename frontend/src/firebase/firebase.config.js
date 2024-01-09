import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyDjRl1kMGRxz_kTEvpmlmV2xPDLWj1eeA8",
  // authDomain: "kitahack-ba4e9.firebaseapp.com",
  // projectId: "kitahack-ba4e9",
  // storageBucket: "kitahack-ba4e9.appspot.com",
  // messagingSenderId: "734661816024",
  // appId: "1:734661816024:web:e52574c482752d5f3fb1ad",
  apiKey: "AIzaSyBX98WggC5Oq8BppNM4S90ZNzcpkc9Pn9Q",
  authDomain: "fir-practise-f9311.firebaseapp.com",
  projectId: "fir-practise-f9311",
  storageBucket: "fir-practise-f9311.appspot.com",
  messagingSenderId: "754300638120",
  appId: "1:754300638120:web:b47b5ea75e4026f744c39d",
  measurementId: "G-DZQ5G289K8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default auth;
