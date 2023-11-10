// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL5TQJs-Ty-la4obbtFFTHvO5BEIfHkbc",
  authDomain: "feedback-management-92e11.firebaseapp.com",
  projectId: "feedback-management-92e11",
  storageBucket: "feedback-management-92e11.appspot.com",
  messagingSenderId: "875008091611",
  appId: "1:875008091611:web:d5bc8571c2cfe6f78a73fe",
  measurementId: "G-5ZXG6ND032"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const firestoreDb = getFirestore(app)
