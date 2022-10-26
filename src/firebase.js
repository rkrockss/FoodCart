
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX3fTELXXOzMUkE_CxTDvkIVWCNC5tCHs",
  authDomain: "foodcart-c6215.firebaseapp.com",
  projectId: "foodcart-c6215",
  storageBucket: "foodcart-c6215.appspot.com",
  messagingSenderId: "1079676684295",
  appId: "1:1079676684295:web:a5a58eda8bb29c904302a2"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

