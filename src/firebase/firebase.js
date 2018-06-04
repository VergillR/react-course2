import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)
const db = firebase.database()

export { firebase, db as default }

// db.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('Removed child with key ', snapshot.key, ' and val: ', snapshot.val())
// }, (error) => {
//   console.log(`Dude. Something went wrong: ${error}`)
// })

// db.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('Changed Child with key ', snapshot.key, ' and val: ', snapshot.val())
// }, (error) => {
//   console.log(`Dude. Something went wrong: ${error}`)
// })

// db.ref('expenses').on('child_added', (snapshot) => {
//   console.log('Added Child with key ', snapshot.key, ' and val: ', snapshot.val())
// }, (error) => {
//   console.log(`Dude. Something went wrong: ${error}`)
// })

// db.ref('expenses').once('value').then((snapshot) => {
//   const expenses = []

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })

//   console.log(expenses)
// })

// db.ref('expenses').push({
//   description: 'Rent',
//   note: 'May',
//   amount: 1200,
//   createdAt: 1000
// })
// db.ref('expenses').push({
//   description: 'Food',
//   note: 'Beer',
//   amount: 3200,
//   createdAt: 55000
// })
// db.ref('expenses').push({
//   description: 'Water',
//   note: 'Mineral',
//   amount: 2800,
//   createdAt: 6000
// })

// db.ref('notes/-LE5x-vcPz-uZi54PEmw').remove()
// db.ref('notes').push({
//   title: 'JS style',
//   body: 'React, Rage'
// })

// const firebaseNotes = {
//   notes: {
//     id12: {
//       title: 'Bowser',
//       body: 'Bowser wins'
//     },
//     id13: {
//       title: 'Story',
//       body: 'Details of story'
//     }
//   }
// }

// const notes = [{
//   id: 12,
//   title: 'Prelude',
//   body: 'Some notes'},
//   {
//     id: 13,
//     title: 'Intro',
//     body: 'Some blabla'
//   }]

// db.ref('notes').set(notes)

// db.ref().set({
//   name: 'Jeff Bowser',
//   age: 49,
//   stressLevel: 6,
//   job: {
//     title: 'Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Kyoto',
//     country: 'Japan'
//   }
// }).then((data) => {
//   console.log(data)
//   console.log('Syncing worked!')
// }).catch((error) => {
//   console.log(error)
// })

// const attr = {
//   height: 160,
//   weight: 80
// }

// // db.ref('age').set(91)
// // db.ref('location/city').set('Nagoya')
// db.ref('attributes').set(attr).then((data) => {
//   console.log('Operation successful!')
// }).catch((err) => {
//   console.log(`There was an error: ${err}`)
// })

// db.ref('isSingle').remove().then((data) => {
//   console.log('isSingle was removed! :)')
// }).catch((err) => {
//   console.log(`Something went wrong: ${err}`)
// })

// db.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} with stresslevel ${val.stressLevel} at ${val.job.company} in ${val.location.city}, ${val.location.country}.`)
// }, (err) => {
//   console.log(`Error: ${err}`)
// })
