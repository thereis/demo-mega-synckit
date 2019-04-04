import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyANxcGZemmAj59lA366AeqVnL_-2jiysJk",
  authDomain: "mega-cloud-mgr.firebaseapp.com",
  databaseURL: "https://mega-cloud-mgr.firebaseio.com",
  projectId: "mega-cloud-mgr",
  storageBucket: "mega-cloud-mgr.appspot.com",
  messagingSenderId: "593596818898"
};

firebase.initializeApp(config);

export { firebase };
