// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChGMKiSvBTt45IU3imowWQrfg-rcqdaPE",
  authDomain: "barbie-doll-house.firebaseapp.com",
  projectId: "barbie-doll-house",
  storageBucket: "barbie-doll-house.appspot.com",
  messagingSenderId: "499602131243",
  appId: "1:499602131243:web:a935eafde4a2d98279dd6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;