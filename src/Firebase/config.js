import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBaug_IDVDei1Si37BTRgE51PbpqUm5okE",
    authDomain: "photo-gallery-my.firebaseapp.com",
    databaseURL: "https://photo-gallery-my.firebaseio.com",
    projectId: "photo-gallery-my",
    storageBucket: "photo-gallery-my.appspot.com",
    messagingSenderId: "352469450735",
    appId: "1:352469450735:web:33efa895302c210e07401a"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
const projectStorage= firebase.storage();
const projectfirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectfirestore,timestamp};