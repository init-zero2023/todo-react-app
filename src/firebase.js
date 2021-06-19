// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase";

  const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyB7a1YGC3kzwnD4yzq8YHSmQueK5cKT9Ug",
    authDomain: "todo-app-5ae50.firebaseapp.com",
    projectId: "todo-app-5ae50",
    storageBucket: "todo-app-5ae50.appspot.com",
    messagingSenderId: "488291829806",
    appId: "1:488291829806:web:e1fc519d49977435f437bf",
    measurementId: "G-425KR1S58P"
  });

  const db = firebaseapp.firestore();

  export default db;  