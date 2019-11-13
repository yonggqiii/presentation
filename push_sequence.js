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
    sequence: ['1/1', '2/1', '2/2', '2/3', '2/4', '2/5', 'team/1', '4/1', 'scope/1', '5/1', '5/2', '5/3', '5/4', '5/5',
      '6/1', '6/2', '6/3', '6/4', '6/5', '6/6', '7/1', '7/2', '8/1', '8/2', '8/3', '8/4', '8/5', '8/6', '8/7', 'mrteo/1', 'bren/1',
      'henry/1', 'coursemo/1', 'work-breakdown/1',
      '9/1', 'timeline/1', '10/1', '11/1', '12/1', 'execution/1', '13/1', '13-2/1', '14/1', '15/1', '16/1', '17/1', '18/1', '19/1',
      '20/1', 'qualitymgmt/1', '21/1', '21/2', '21/3', '21/4', '22/1', '22/2', '22/3', '22/4', 'summary/1', '23/1', '23/2', '23/3', '23/4', '24/1', '24/2', '24/3', '24/4', 'end/1']
  })
}

const a = meow()
a.then(x => console.log(x)).catch(x => console.log(x))
