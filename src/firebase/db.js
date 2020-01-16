import firebase from 'firebase';
//const admin = require('firebase-admin');

var firebaseConfig = {
    apiKey: "AIzaSyCgWLyAcsI7IuQXpOa2UawLNVxDmRPkHqk",
    authDomain: "juaab-588e2.firebaseapp.com",
    databaseURL: "https://juaab-588e2.firebaseio.com",
    projectId: "juaab-588e2",
    storageBucket: "juaab-588e2.appspot.com",
    messagingSenderId: "283015722554",
    appId: "1:283015722554:web:fd013428963fa8063fe703",
    measurementId: "G-3LKCBP9M8E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //admin.initializeApp();

  //const db = admin.firestore()

  export {firebase}