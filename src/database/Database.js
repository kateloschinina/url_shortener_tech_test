import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCFJ0YBsH7KevmFk-hCEBrW82lGnULzi1I",
  authDomain: "url-shortener-8596d.firebaseapp.com",
  databaseURL: "https://url-shortener-8596d.firebaseio.com",
  projectId: "url-shortener-8596d",
  storageBucket: "url-shortener-8596d.appspot.com",
  messagingSenderId: "1023596178761"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
