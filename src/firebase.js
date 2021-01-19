import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyBYa0DYmqNzAPyEqrNr2ljtOYVmNEjP60k",
    authDomain: "facebook-clone-586d9.firebaseapp.com",
    projectId: "facebook-clone-586d9",
    storageBucket: "facebook-clone-586d9.appspot.com",
    messagingSenderId: "704176709552",
    appId: "1:704176709552:web:1c6f85b60c4e11a747c075",
    measurementId: "G-ZSMCXN4P8P"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export{auth,provider};
  export default db;