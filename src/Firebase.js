import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA40qe1IlzM3BmKd-I3viOGpTlDpBvEa_Y",
  authDomain: "fb-clone-d52fb.firebaseapp.com",
  databaseURL: "https://fb-clone-d52fb.firebaseio.com",
  projectId: "fb-clone-d52fb",
  storageBucket: "fb-clone-d52fb.appspot.com",
  messagingSenderId: "866690113068",
  appId: "1:866690113068:web:935c87ef3fad74808dbb89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
