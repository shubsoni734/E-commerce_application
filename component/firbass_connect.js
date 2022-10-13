// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCke8XvH3iWLGizlu1ObxJgiG6CW2DiUg",
  authDomain: "sam3-714fb.firebaseapp.com",
  projectId: "sam3-714fb",
  storageBucket: "sam3-714fb.appspot.com",
  messagingSenderId: "184657974657",
  appId: "1:184657974657:web:3d8cc57c81a01945cbc480",
  measurementId: "G-82BRE5H6R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize database
export const db = getDatabase(app);
if(!db){
  console.log("data base is not connected");
}