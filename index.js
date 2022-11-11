var numofbuttons = document.querySelectorAll(".drum").length;
// to send the key by mouseclick on button
for (var i = 0; i < numofbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonClicked = this.innerHTML;

        makeSound(buttonClicked);

        buttonAnimation(buttonClicked);
    });
}
// to send the key pressed on keyboard
document.addEventListener("keydown", function (event) {
    // added tolowercase in order to work even if the capslock is on 
    makeSound(event.key.toLowerCase());

    buttonAnimation(event.key);
})

function makeSound(buttonClicked) {
    switch (buttonClicked) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
    }
}

function buttonAnimation(pressedKey){
    var activeButton = document.querySelector(`.${pressedKey}`);
    activeButton.classList.add("pressed");
    
    setTimeout(removeFunction, 100)
    function removeFunction(){
        activeButton.classList.remove("pressed");
    }
    }

