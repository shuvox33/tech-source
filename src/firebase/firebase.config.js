// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXN4iER5JDaTgBqC-dINjawsRpmQv9m7s",
    authDomain: "a10-tech-source.firebaseapp.com",
    projectId: "a10-tech-source",
    storageBucket: "a10-tech-source.appspot.com",
    messagingSenderId: "575913103400",
    appId: "1:575913103400:web:4ee3731e833ceba6a4a51d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;