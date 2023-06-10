import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCn__BZkyRhTpJUN78NvO5yAdbg9bZqC4Y",
    authDomain: "olx-clone-79ba4.firebaseapp.com",
    projectId: "olx-clone-79ba4",
    storageBucket: "olx-clone-79ba4.appspot.com",
    messagingSenderId: "1061514332324",
    appId: "1:1061514332324:web:d20d4ef7e9d5b080f2fe31",
    measurementId: "G-JECQYJ9549"
  };

  export default firebase.initializeApp(firebaseConfig)