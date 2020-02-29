import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFirestore } from "angularfire2/firestore"
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export class createGroup {

  constructor() {

  //const db = firebase.firestore();

}
db.collection('groups').get().then((snapshot) => {

})
const form = document.querySelector('#group')

  // saving data
console.log("HERE");
  form.addEventListener('submit', (e) => {
    // prevents page refresh
    e.preventDefault();
    db.collection('groups').add({
      name : form.gname.value,
      description : form.gdescrip.value
                                })
      // clears fields after value is entered
      console.log("HERE");
      form.gname.value;
      form.gdescrip.value;
});

}
