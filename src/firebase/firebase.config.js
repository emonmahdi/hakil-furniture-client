// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID,
};

/* const firebaseConfig = {
  apiKey: "AIzaSyD_Zt4gwirm7bSx6ylDu42f9AqP5bstUwg",
  authDomain: "hakil-furniture.firebaseapp.com",
  projectId: "hakil-furniture",
  storageBucket: "hakil-furniture.appspot.com",
  messagingSenderId: "989430203013",
  appId: "1:989430203013:web:364d482185a58e77fe9fec"
}; */

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;