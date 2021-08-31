import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
    apiKey: "AIzaSyBuVzCUQst_QZwfqgM1ABD04LPVVGkZpLU",
    authDomain: "snsapp-8b3b8.firebaseapp.com",
    projectId: "snsapp-8b3b8",
    storageBucket: "snsapp-8b3b8.appspot.com",
    messagingSenderId: "405080173138",
    appId: "1:405080173138:web:58905c2f3f50ba55478d8b",
    measurementId: "G-C88DGRSB8X"
    }
  )
}
export default firebase
