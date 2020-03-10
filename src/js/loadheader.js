
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
        headrequest.open('GET', '.../header.html', true);
        headrequest.send();
    }
};

headrequest.send();

// tack scripts on here