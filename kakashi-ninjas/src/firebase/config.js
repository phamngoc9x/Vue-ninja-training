import firebase from "firebase/app"; 
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCJIUKkc03WxWZkpdtamT9Ir7i2hw7EbNw",
  authDomain: "kakashi-ninjas.firebaseapp.com",
  projectId: "kakashi-ninjas",
  storageBucket: "kakashi-ninjas.appspot.com",
  messagingSenderId: "502404516024",
  appId: "1:502404516024:web:146c470c1f516d7ecdcc4d"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, projectStorage, timestamp }