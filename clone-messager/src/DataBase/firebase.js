import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBrwemhehqdQ--wAk9F6o8Na4WAfJfy2XM",
  authDomain: "clone-messager-81fcb.firebaseapp.com",
  databaseURL: "https://clone-messager-81fcb.firebaseio.com",
  projectId: "clone-messager-81fcb",
  storageBucket: "clone-messager-81fcb.appspot.com",
  messagingSenderId: "1083824027211",
  appId: "1:1083824027211:web:bc9b851bd62adc6f0dffce",
  measurementId: "G-FX64KRNQYB"
})

const db = firebaseApp.firestore()

export default db