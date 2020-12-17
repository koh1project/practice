import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAqEziGEe4C1FCuKqlW4p_4cgYJja5qysM',
  authDomain: 'crwn-db-b12e5.firebaseapp.com',
  projectId: 'crwn-db-b12e5',
  storageBucket: 'crwn-db-b12e5.appspot.com',
  messagingSenderId: '170641856316',
  appId: '1:170641856316:web:0311b6cb2f209fdea1f039',
  measurementId: 'G-HWXS72YWDW',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
