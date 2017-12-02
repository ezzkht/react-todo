import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyD4HN8o8HaUh1_Gk5SI6cj1Eh3Fy3RjiZ8",
      authDomain: "ezz-todo-app.firebaseapp.com",
      databaseURL: "https://ezz-todo-app.firebaseio.com",
      projectId: "ezz-todo-app",
      storageBucket: "ezz-todo-app.appspot.com",
      messagingSenderId: "390742540681"
    };

    firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
