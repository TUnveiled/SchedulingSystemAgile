import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFirestore } from "angularfire2/firestore"
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export class createGroup {

  constructor(
  DataBase: AngularFireDatabase,
  afs: AngularFirestore) {

  const db = firebase.firestore();

}

const form = document.querySelector('#group')

  // saving

  form.addEventListener('submit', (e) => {
    // prevents page refresh
    e.preventDefault();
    db.collection('groups').add({
      name : form.gname.value,
      description : form.gdescrip.value
                                })
      // clears fields after value is entered
      form.gname.value;
      form.gdescrip.value;
});

}
