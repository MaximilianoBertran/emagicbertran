// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFireStore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMmeUqITBTPhzj2fGv0tb9G5M3XEu4wy4",
  authDomain: "e-magic-react.firebaseapp.com",
  projectId: "e-magic-react",
  storageBucket: "e-magic-react.appspot.com",
  messagingSenderId: "737515811856",
  appId: "1:737515811856:web:052a8635ac3ca3f9494695"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app)

export default db