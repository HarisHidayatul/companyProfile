var characterCurrent = 0;
var allProgramText = [
    "Bayar pakai Do'a",
    "Cooking Class",
    "Event All 1",
    "Event All 2",
    "Event All 3",
    "Event All 4",
    "Event All 5"
]
var indexProgram = 0;

function setElementSame(indexText) {
    var programText = document.getElementsByName('programText');
    programText[0].innerHTML = allProgramText[indexText];
    programText[1].innerHTML = allProgramText[indexText];
    programText[2].innerHTML = allProgramText[indexText];
}

function setElementTextLeft(indexText) {
    var programText = document.getElementsByName('programText');
    var lengthArrayProgram = allProgramText.length;
    if (indexText == 0) {
        programText[0].innerHTML = allProgramText[lengthArrayProgram - 2];
        programText[1].innerHTML = allProgramText[lengthArrayProgram - 1];
        programText[2].innerHTML = allProgramText[0];
    } else if (indexText == 1) {
        programText[0].innerHTML = allProgramText[lengthArrayProgram - 1];
        programText[1].innerHTML = allProgramText[0];
        programText[2].innerHTML = allProgramText[1];
    } else {
        programText[0].innerHTML = allProgramText[indexText - 2];
        programText[1].innerHTML = allProgramText[indexText - 1];
        programText[2].innerHTML = allProgramText[indexText];
    }
}

function setElementTextRight(indexText) {
    var programText = document.getElementsByName('programText');
    var lengthArrayProgram = allProgramText.length;
    if (indexText == (lengthArrayProgram - 1)) {
        programText[0].innerHTML = allProgramText[indexText];
        programText[1].innerHTML = allProgramText[0];
        programText[2].innerHTML = allProgramText[1];
    } else {
        programText[0].innerHTML = allProgramText[indexText];
        programText[1].innerHTML = allProgramText[indexText + 1];
        programText[2].innerHTML = allProgramText[indexText + 2];
    }
}
$(window).resize(function() {
    // your code
    checkSize();
});

$(document).ready(function() {
    checkSize();
    console.log(allProgramText);
});

window.setInterval(function() {
    //code goes here that will be run every 5 seconds.    
    checkSize();
}, 3000);

function clickLeft() {
    var lengthArrayProgram = allProgramText.length;
    indexProgram++;
    if (indexProgram >= lengthArrayProgram) {
        indexProgram = 0;
    }
    // console.log(indexProgram);
    var runningTextElement = document.getElementById('runningTextElement');
    runningTextElement.classList.remove("zeroPositionText");
    runningTextElement.classList.add("moveRightText");

    setTimeout(setElementTextLeft(indexProgram), 1100);
    setTimeout(function() {
        setElementSame(indexProgram);
        runningTextElement.classList.remove("moveRightText");
        runningTextElement.classList.add("zeroPositionText");
    }, 1200);
}

function clickRight() {
    var lengthArrayProgram = allProgramText.length;
    indexProgram--;
    if (indexProgram < 0) {
        indexProgram = lengthArrayProgram - 1;
    }
    // console.log(indexProgram);
    var runningTextElement = document.getElementById('runningTextElement');
    runningTextElement.classList.remove("zeroPositionText");
    runningTextElement.classList.add("moveLeftText");

    setTimeout(setElementTextRight(indexProgram), 1100);
    setTimeout(function() {
        setElementSame(indexProgram);
        runningTextElement.classList.remove("moveLeftText");
        runningTextElement.classList.add("zeroPositionText");
    }, 1200);
}

function checkSize() {
    console.log(window.innerWidth);
    if (window.innerWidth < 900) {
        showOneCharacter();
        hideSocialMedia();
    } else if (window.innerWidth < 1080) {
        showOneCharacter();
        showSocialMedia();
    } else {
        showAllCharacter();
        showSocialMedia();
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

function hideSocialMedia() {
    document.getElementById('imageSocialMedia1').style.display = 'none';
    document.getElementById('imageSocialMedia2').style.display = 'block';
}

function showSocialMedia() {
    document.getElementById('imageSocialMedia1').style.display = 'block';
    document.getElementById('imageSocialMedia2').style.display = 'none';
}