import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyA-po9zZGNWka37t1d71mRDD5n6WfdiR1Y",
  authDomain: "fullclone-70887.firebaseapp.com",
  projectId: "fullclone-70887",
  storageBucket: "fullclone-70887.appspot.com",
  messagingSenderId: "391445635272",
  appId: "1:391445635272:web:5724c0a7474b63308e05fd",
  measurementId: "G-LV01JDJVWQ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };