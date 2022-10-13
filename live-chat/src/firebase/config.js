import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB3c7Abe9UidBnxShMl2O_yqjUebcMs2V8",
  authDomain: "ninja-vue-firebase-site.firebaseapp.com",
  projectId: "ninja-vue-firebase-site",
  storageBucket: "ninja-vue-firebase-site.appspot.com",
  messagingSenderId: "492421750300",
  appId: "1:492421750300:web:e77b5c243d23712b2d49d9"
}

// Init firebase 
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }