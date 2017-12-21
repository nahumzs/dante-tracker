import firebase from 'firebase';
import config from  './.firebase.config.json';

firebase.initializeApp(config);

export default firebase;
