import firebase, { firestore } from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB5UOJxrLaJOPChyOiYfkptUkBTuEF5wPk",
    authDomain: "hb-marioplan.firebaseapp.com",
    databaseURL: "https://hb-marioplan.firebaseio.com",
    projectId: "hb-marioplan",
    storageBucket: "hb-marioplan.appspot.com",
    messagingSenderId: "597052355536"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;