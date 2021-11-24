import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB7vw2lWNFrI7rc-GvEX6xSRSus2_WSMSs",
    authDomain: "react-to-do-902f6.firebaseapp.com",
    projectId: "react-to-do-902f6",
    storageBucket: "react-to-do-902f6.appspot.com",
    messagingSenderId: "385033743055",
    appId: "1:385033743055:web:0d1d5487c2e93b428a65ba"
  };
  
  
  firebase.initializeApp(firebaseConfig)

  export default firebase;