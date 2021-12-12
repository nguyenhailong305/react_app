import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA61MX-ccetxR-hLPUMKMC5Eg8x6c3RWeU",
    authDomain: "react-app-82c53.firebaseapp.com",
    databaseURL: "https://react-app-82c53-default-rtdb.firebaseio.com",
    projectId: "react-app-82c53",
    storageBucket: "react-app-82c53.appspot.com",
    messagingSenderId: "91492222165",
    appId: "1:91492222165:web:c608a12a7d50131d984e5c",
    measurementId: "G-V9G9WG3P4K"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('dataForNote')


