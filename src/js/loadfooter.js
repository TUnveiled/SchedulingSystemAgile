
// open the html portion
let footrequest = new XMLHttpRequest();

footrequest.open('GET', './footer.html', true);

footrequest.onload = function() {
    if (footrequest.status >= 200 && footrequest.status < 400) {
        document.querySelector('#footer').innerHTML = footrequest.responseText;
    }
};

footrequest.onloadend = function() {
    if(footrequest.status === 404)
    {
        footrequest.open('GET', '../footer.html', true);
        footrequest.send();
    }
};

footrequest.send();

// javascript portion
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}