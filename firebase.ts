import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"


//firebase config 
const firebaseConfig = {
    apiKey: "AIzaSyCFJKRvd5a8LVyEG38tXD5489JuRabVKgo",
    authDomain: "saas-translator-app-5bb17.firebaseapp.com",
    projectId: "saas-translator-app-5bb17",
    storageBucket: "saas-translator-app-5bb17.appspot.com",
    messagingSenderId: "368009528112",
    appId: "1:368009528112:web:0489f2a1b100c8c74d3ef5"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions }
