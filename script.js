var characterCurrent = 0;
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
        showOneCharacter();
    } else if (window.innerWidth < 1080) {
        showOneCharacter();
    } else {
        showAllCharacter();
    }
}

function showOneCharacter() {
    var element = document.getElementsByName("wrapActor");
    for (var i = 0; i < element.length; i++) {
        if (i == characterCurrent) {
            element[i].style.display = "block";
        } else {
            element[i].style.display = "none";
        }
    }
    characterCurrent++;
    if (characterCurrent > 3) {
        characterCurrent = 0;
    }
}

function showAllCharacter() {
    var element = document.getElementsByName("wrapActor");
    for (var i = 0; i < element.length; i++) {
        element[i].style.display = "block";
    }
}