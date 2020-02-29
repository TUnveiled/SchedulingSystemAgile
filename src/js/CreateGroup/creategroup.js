const form = document.querySelector('#group');
if (!sessionStorage.uid) {
  sessionStorage.uid = "hrYlfJgZzOhhEC1dNrC1DFCziwN2";
}
  // saving data
console.log("HERE");
  form.addEventListener('submit', (e) => {
    // prevents page refresh
    e.preventDefault();
    db.collection('groups').add({
      name : form.gname.value,
      description : form.gdescrip.value,
      owner : db.collection("users").doc(sessionStorage.uid),
    }).then((doc)=> {
      db.collection('groups/' + doc.id + '/members').add({
        role: "owner",
        user: db.collection("users").doc(sessionStorage.uid),
      });
    });
      // clears fields after value is entered
      console.log("HERE");
      form.gname.value;
      form.gdescrip.value;
});

