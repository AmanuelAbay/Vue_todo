import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCCS6pPmb3eryo_9-IaAylgAlopJcXQmVE",
    authDomain: "vue-todo-78afd.firebaseapp.com",
    projectId: "vue-todo-78afd",
    storageBucket: "vue-todo-78afd.appspot.com",
    messagingSenderId: "9885924040",
    appId: "1:9885924040:web:7fee071b795ba0108703fd",
    measurementId: "G-22XTJSC6V6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;