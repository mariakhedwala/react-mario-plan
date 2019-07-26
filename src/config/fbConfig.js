import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD0GVNZjeOMfLHcwkDwbexKVV1rANTKtTo",
    authDomain: "mario-plan-44791.firebaseapp.com",
    databaseURL: "https://mario-plan-44791.firebaseio.com",
    projectId: "mario-plan-44791",
    storageBucket: "",
    messagingSenderId: "892846566072",
    appId: "1:892846566072:web:00f41ada30a9b4dc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;