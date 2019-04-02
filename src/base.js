import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({    
    apiKey: "AIzaSyDDf329jYGRDkSw1X8TAosBgqz3yj_BWvw",
    authDomain: "catch-of-the-daya-murray.firebaseapp.com",
    databaseURL: "https://catch-of-the-daya-murray.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;