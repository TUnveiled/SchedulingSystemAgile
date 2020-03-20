function LogOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        sessionStorage.token = null;

        // The signed-in user info.
        sessionStorage.email = null;
        sessionStorage.name = null;
        sessionStorage.uid = null;
        window.location.replace("index.html");

    }).catch(function(error) {
        alert(error)
    });
}