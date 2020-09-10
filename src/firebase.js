import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyBqK1blsGT_onwWDX__Eyvykhr4OZ_PBC4",
  authDomain: "todo-23851.firebaseapp.com",
  databaseURL: "https://todo-23851.firebaseio.com",
  projectId: "todo-23851",
  storageBucket: "todo-23851.appspot.com",
  messagingSenderId: "559857881379",
  appId: "1:559857881379:web:f4aea43a68dae630a8bc96",
  measurementId: "G-W6L0CYXZV3",
});

const db = firebaseapp.firestore();
export default db;
