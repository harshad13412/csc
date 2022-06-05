import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDF8aILfX93gg3xFbIvvz10p9yx4o2OYms",
    authDomain: "vote-trump.firebaseapp.com",
    databaseURL: "https://vote-trump-default-rtdb.firebaseio.com",
    projectId: "vote-trump",
    storageBucket: "vote-trump.appspot.com",
    messagingSenderId: "577986806544",
    appId: "1:577986806544:web:d6480f96657b3eedfd5b95",
    measurementId: "G-BSRVX3SB94"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();