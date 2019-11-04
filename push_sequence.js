const admin = require('firebase')
const config = {
  apiKey: 'AIzaSyBzuNfqrqZF7uyWtUSoRNQKqfr8qktMHzg',
  authDomain: 'ie4240.firebaseapp.com',
  databaseURL: 'https://ie4240.firebaseio.com',
  projectId: 'ie4240',
  storageBucket: 'ie4240.appspot.com',
  messagingSenderId: '131444329978',
  appId: '1:131444329978:web:ef85b713a151b0218ca843'
}
const firestore = admin.initializeApp(config).firestore()

const meow = async function () {
  await firestore.doc('sequence/sequence').set({
    sequence: ['1/1', '2/1', '2/2', '2/3', '2/4']
  })
}

const a = meow()
a.then(x => console.log(x)).catch(x => console.log(x))
