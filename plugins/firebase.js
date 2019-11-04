import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyBzuNfqrqZF7uyWtUSoRNQKqfr8qktMHzg',
    authDomain: 'ie4240.firebaseapp.com',
    databaseURL: 'https://ie4240.firebaseio.com',
    projectId: 'ie4240',
    storageBucket: 'ie4240.appspot.com',
    messagingSenderId: '131444329978',
    appId: '1:131444329978:web:ef85b713a151b0218ca843'
  }
  firebase.initializeApp(config)
}

export const db = firebase.firestore()
export default firebase
