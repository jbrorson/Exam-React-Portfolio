import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_wvgz-nKb099iOOuft3GykuhEtURGbEI",
  authDomain: "exam-936ae.firebaseapp.com",
  projectId: "exam-936ae",
  storageBucket: "exam-936ae.appspot.com",
  messagingSenderId: "73099150620",
  appId: "1:73099150620:web:90777fbc868517dfdaa6d9"
});


var db = firebaseApp.firestore();

export { db };