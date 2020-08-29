import firebase from'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC0LAB9I8Yx-exp45iyPSB4sdKThZ4F258",
    authDomain: "publisher-30368.firebaseapp.com",
    databaseURL: "https://publisher-30368.firebaseio.com",
    projectId: "publisher-30368",
    storageBucket: "publisher-30368.appspot.com",
    messagingSenderId: "1035916529010",
    appId: "1:1035916529010:web:6283e1c02da426156b61eb"
  };

  firebase.initializeApp(firebaseConfig);
  //export const db=firebase.firestore();

  export default firebase;