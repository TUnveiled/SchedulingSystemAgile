
// load html portion
let headrequest = new XMLHttpRequest();

headrequest.open('GET', './header.html', true);

headrequest.onload = function() {
    if (headrequest.status >= 200 && headrequest.status < 400) {
        document.querySelector('#header').innerHTML = headrequest.responseText;
    }
};

headrequest.onloadend = function() {
    if(headrequest.status === 404)
    {
        headrequest.open('GET', '../../header.html', true);
        headrequest.send();
    }
};

headrequest.send();

function LogOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        sessionStorage.token = null;

        // The signed-in user info.
        sessionStorage.email = null;
        sessionStorage.name = null;
        sessionStorage.uid = null;
        window.location.replace("Login.html");

    }).catch(function(error) {
        alert(error)
    });
}