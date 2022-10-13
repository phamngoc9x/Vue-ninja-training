import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB3c7Abe9UidBnxShMl2O_yqjUebcMs2V8",
  authDomain: "ninja-vue-firebase-site.firebaseapp.com",
  projectId: "ninja-vue-firebase-site",
  storageBucket: "ninja-vue-firebase-site.appspot.com",
  messagingSenderId: "492421750300",
  appId: "1:492421750300:web:db005475e4f0e5b22d49d9"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }