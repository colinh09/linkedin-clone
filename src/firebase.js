// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAjcVkQjUfOoXDDfHmqAeGzjLVAKDj-q5E",
    authDomain: "linkedin-clone-f2d13.firebaseapp.com",
    projectId: "linkedin-clone-f2d13",
    storageBucket: "linkedin-clone-f2d13.appspot.com",
    messagingSenderId: "552012178633",
    appId: "1:552012178633:web:33039c8dc84e2c03d81918",
    measurementId: "G-6J0NY52YW6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};