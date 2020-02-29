
const form = document.querySelector('#group')

  // saving data
console.log("HERE");
  form.addEventListener('submit', (e) => {
    // prevents page refresh
    e.preventDefault();
    firebase.firestore().collection('groups').add({
      name : form.gname.value,
      description : form.gdescrip.value
                                })
      // clears fields after value is entered
      console.log("HERE");
      form.gname.value;
      form.gdescrip.value;
});

