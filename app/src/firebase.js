import firebase from 'firebase';
import config from  './.firebase.config.json';

firebase.initializeApp(config);

// export const provider = new firebase.auth.GoogleAuthProvider();
//
// export const auth = firebase.auth();

export default firebase;
