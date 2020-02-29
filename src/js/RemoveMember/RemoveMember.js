function RemoveMember()
{
var name=document.getElementById("MemEmail").value;
console.log(name);
    var cityRef = firebase.firestore().collection('users').doc(name);
console.log(cityRef);
// Remove the 'capital' field from the document
    /*var removeCapital = cityRef.update({
        capital: firebase.firestore.FieldValue.delete()
    });*/



}
