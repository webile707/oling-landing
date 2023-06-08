// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyAAGsIiWG3CGfbnTsUK2NEUV1-V3xbHjuA",
        authDomain: "oling-52ee9.firebaseapp.com",
        projectId: "oling-52ee9",
        storageBucket: "oling-52ee9.appspot.com",
        messagingSenderId: "177145394629",
        appId: "1:177145394629:web:76d76459f1b0a9739887ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
