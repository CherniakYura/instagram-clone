import * as Firebase from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCS17XJapSFDZzaPAVKPWM_uZqZrfD8GmA",
    authDomain: "instagram-clone-4a846.firebaseapp.com",
    projectId: "instagram-clone-4a846",
    storageBucket: "instagram-clone-4a846.appspot.com",
    messagingSenderId: "233007670425",
    appId: "1:233007670425:web:7a9880b861c364b3e94408",
};

const firebase =  Firebase.initializeApp(firebaseConfig);

//console.log(firebase);

const  db  = getFirestore();
const auth = getAuth();
//seedDatabase(FieldValue);

export {
    firebase,
    db,
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
};