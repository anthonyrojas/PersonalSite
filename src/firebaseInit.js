import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDBx8FbnckJ35W1T6ivH9wwpfX6f_I7QvQ",
    authDomain: "portfolio-6d2f6.firebaseapp.com",
    databaseURL: "https://portfolio-6d2f6.firebaseio.com",
    projectId: "portfolio-6d2f6",
    storageBucket: "portfolio-6d2f6.appspot.com",
    messagingSenderId: "419510442110"
});
const firestoreConn = firebase.firestore();
firestoreConn.settings({timestampsInSnapshots: true});
export const db = firestoreConn;
export const storage = firebaseApp.storage();