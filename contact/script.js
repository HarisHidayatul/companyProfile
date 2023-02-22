$(window).resize(function() {
    // your code
    checkSize();
});

$(document).ready(function() {
    checkSize();
});

window.setInterval(function() {
    //code goes here that will be run every 5 seconds.
    checkSize();
}, 3000);

function checkSize() {
    console.log(window.innerWidth);
    if (window.innerWidth < 900) {
        hideSocialMedia();
    } else if (window.innerWidth < 1080) {
        showSocialMedia();
    } else {
        showSocialMedia();
    }
}

function hideSocialMedia() {
    document.getElementById("imageSocialMedia1").style.display = "none";
    document.getElementById("imageSocialMedia2").style.display = "block";
}

function showSocialMedia() {
    document.getElementById("imageSocialMedia1").style.display = "block";
    document.getElementById("imageSocialMedia2").style.display = "none";
}

function radioSelect(index) {
    var elementRadio = document.getElementsByName("radioSelect");
    for (var i = 0; i < elementRadio.length; i++) {
        if (i == index) {
            elementRadio[i].classList.add('active');
        } else {
            elementRadio[i].classList.remove('active');
        }
    }
}