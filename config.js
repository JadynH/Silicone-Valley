import firebase from 'firebase';
import '@firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCQilhRXUbgZEa7I6pg38A4JRel1dJkGZc",
    authDomain: "mod-mood-of-the-day.firebaseapp.com",
    projectId: "mod-mood-of-the-day",
    storageBucket: "mod-mood-of-the-day.appspot.com",
    messagingSenderId: "1090057159744",
    appId: "1:1090057159744:web:6e7d44a43b4b572fd84ba5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();