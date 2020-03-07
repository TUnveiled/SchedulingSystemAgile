function RemoveMember()
{
var name=document.getElementById("MemEmail").value;
console.log(name);
var docu="Q14RGGDUyDWMI3WtGts9";//replace once group document is known
    var Ref = firebase.firestore().collection("groups").doc(docu).collection("members");
    UserRef=Ref.where("role","==","owner");
    UserRef.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.id, ' => ', doc.get("user").id);
            var LocalUser=doc.id;
            var UserId=doc.get("user").id;
            console.log(UserId);
            Ref.doc(doc.id).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
            var GroupRef =firebase.firestore().collection("users");
            GroupRef.doc(UserId).delete().then(function(){
                console.log("Document successfully deleted");
            }).catch(function(error){
                console.error("Error removing document: ",error);
            });
            console.log(GroupRef.id);
            console.log(GroupRef);
            GroupRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data().groups[0].get().value, doc.groups);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
            /*UserRef.doc(doc.id).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });*/
        });
    });
    //var query=cityRef.where("name","==","temp");
console.log(UserRef);
//console.log(query.discription);
// Remove the 'capital' field from the document
    /*var removeCapital = cityRef.update({
        capital: firebase.firestore.FieldValue.delete()
    });*/



}
