const form = document.querySelector('#group');
if (!sessionStorage.uid) {
  sessionStorage.uid = "hrYlfJgZzOhhEC1dNrC1DFCziwN2";
}
  // saving data
console.log("HERE");
  form.addEventListener('submit', (e) => {
    // prevents page refresh
    e.preventDefault();
    firebase.firestore().collection('groups').add({
      name : form.gname.value,
      description : form.gdescrip.value,
      owner : firebase.firestore().collection("users").doc(sessionStorage.uid),
    }).then((doc)=> {
      firebase.firestore().collection('groups/' + doc.id + '/members').add({
        role: "owner",
        user: firebase.firestore().collection("users").doc(sessionStorage.uid),
      });
      let gid = doc.id;
      firebase.firestore().collection('users').doc(sessionStorage.uid).get().then((doc) => {
        let data = doc.data();
        let groups = data.groups;
        groups.push(firebase.firestore().collection("groups").doc(gid));

        // give the user a reference to the group as well
        firebase.firestore().collection("users").doc(sessionStorage.uid).update({
          groups: groups
        });
      });

    });
      // clears fields after value is entered
    console.log(sessionStorage.name);
      console.log("HERE");
      form.gname.value;
      form.gdescrip.value;

    window.location.href = ".../MainMenu.html";
});

