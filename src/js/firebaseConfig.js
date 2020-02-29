import firebase from 'firebase';
import 'firebase/firestore';

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD_SxZ9Gn1esESkAvIlkj4lI0YpawSoNl4",
  authDomain: "agileproject-1ee78.firebaseapp.com",
  databaseURL: "https://agileproject-1ee78.firebaseio.com",
  projectId: "agileproject-1ee78",
  storageBucket: "agileproject-1ee78.appspot.com",
  messagingSenderId: "467883013107",
  appId: "1:467883013107:web:207f13d3620e624ae05886",
  measurementId: "G-5YC07FPS1C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// firebase collections
const usersCollection = db.collection('users');
const groupsCollection = db.collection('groups');

export {
  auth,
  currentUser,
  usersCollection,
  groupsCollection
}
