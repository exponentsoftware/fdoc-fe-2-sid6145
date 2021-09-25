import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyA19SIh36tCkbWJwbNxC8FBHpFBz7mbHTU",
    authDomain: "g-10-cba9f.firebaseapp.com",
    projectId: "g-10-cba9f",
    storageBucket: "g-10-cba9f.appspot.com",
    messagingSenderId: "765134880017",
    appId: "1:765134880017:web:b3c1a9ee716c20789660b0"
  };

firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage()