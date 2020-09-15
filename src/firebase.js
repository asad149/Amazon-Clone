import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCl90-Esafqo6uu0tD_-zuTWZpTmzd_7yk",
  authDomain: "challenge-556b9.firebaseapp.com",
  databaseURL: "https://challenge-556b9.firebaseio.com",
  projectId: "challenge-556b9",
  storageBucket: "challenge-556b9.appspot.com",
  messagingSenderId: "957895473648",
  appId: "1:957895473648:web:0916593c0656132e754535",
  measurementId: "G-FZYQRBMSNW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
