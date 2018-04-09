import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBOhr0i61oK6Y-AomCoEuU1vIlfrRGVOOw',
    authDomain: 'bora-ajudar-a50fe.firebaseapp.com',
    databaseURL: 'https://bora-ajudar-a50fe.firebaseio.com',
    projectId: 'bora-ajudar-a50fe',
    storageBucket: '',
    messagingSenderId: '771807153338'
  };

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export const auth = firebase.auth();
export default base;