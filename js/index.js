var numberOfButtons=document.querySelectorAll(".drum").length;

// Adding Click eventlistener and calling make sund func.

for(i=0; i<numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonText=this.innerText;
        makeSound(buttonText);
    });
}

// Capturing key click

document.addEventListener("keydown",function(event){
        makeSound(event.key);
});

// Make sound function which take key name to play music

function makeSound(key){
    switch (key){
        case "w":
            var audio1=new Audio("C:/Users/harsh/HtmlCss_Angela/drumset/sounds/crash.mp3");
            audio1.play();
            break;
        case "a":
            var audio2=new Audio("C:/Users/harsh/HtmlCss_Angela/drumset/sounds/kick-bass.mp3");
            audio2.play();
            break;
        case "s":
            var audio3=new Audio("C:/Users/harsh/HtmlCss_Angela/drumset/sounds/snare.mp3");
            audio3.play();
            break;    
        case "d":
            var audio4=new Audio("C:/Users/harsh/HtmlCss_Angela/drumset/sounds/tom-1.mp3");
            audio4.play();
            break;
        case "j":
            var audio5=new Audio("C:/Users/harsh/HtmlCss_Angela/drumset/sounds/tom-2.mp3");
            audio5.play();
            break;
        case "k":
            var audio6=new Audio("C:/Users/harsh/HtmlCss_Angela/drumset/sounds/tom-3.mp3");
            audio6.play();
            break;
        case "l":
            var audio7=new Audio("C:/Users/harsh/HtmlCss_Angela/drumset/sounds/tom-4.mp3");
            audio7.play();
            break;
        default:
            var audio1=new Audio("C:/Users/harsh/HtmlCss_Angela/drumset/sounds/crash.mp3");
            audio1.play();
            break;
    }
}