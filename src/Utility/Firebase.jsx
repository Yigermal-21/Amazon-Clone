// // Import the functions you need from the SDKs you need
// import { initializeapp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";



// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB_aCAiniJXhY9-RKcu6IqAHyIA3RrEeQ4",
//   authDomain: "e-backend-6e797.firebaseapp.com",
//   projectId: "e-backend-6e797",
//   storageBucket: "e-backend-6e797.firebasestorage.app",
//   messagingSenderId: "528142397020",
//   appId: "1:528142397020:web:e0e624c4acbba5ac2c0099",
// };

// // Initialize Firebase
// const app = initializeapp(firebaseConfig);



// // Initialize authentication and Firestore services
// export const auth = getAuth(app);
// export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB_aCAiniJXhY9-RKcu6IqAHyIA3RrEeQ4",
  authDomain: "e-backend-6e797.firebaseapp.com",
  projectId: "e-backend-6e797",
  storageBucket: "e-backend-6e797.appspot.com",
  messagingSenderId: "528142397020",
  appId: "1:528142397020:web:e0e624c4acbba5ac2c0099",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize authentication and Firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);


