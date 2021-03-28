// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtZuJWWSHy7X64EA8e_07O2IrBDuYpp-A",
  authDomain: "tectalk-ho.firebaseapp.com",
  databaseURL:"https://tectalk-ho.firebaseio.com",
  projectId: "tectalk-ho",
  storageBucket: "tectalk-ho.appspot.com",
  messagingSenderId: "105007220142",
  appId: "1:105007220142:web:b877e08eec2fa2d129743f",
  measurementId: "G-LCLTKNDYMS"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;