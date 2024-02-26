var arr=document.querySelectorAll('button');
var n=arr.length;
for (var i=0;i<n;i++){
document.querySelectorAll('.drum')[i].addEventListener('click',function(){
    var name=this.innerHTML;
    makesound(name);
    buttonActive(name);
})
}

document.addEventListener('keydown',function(event){
    makesound(event.key);
    buttonActive(event.key);
})
// var audio=new Audio('sounds/crash.mp3');
// audio.play();


function makesound(name){
    switch (name) {
        case "w":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
                var audio=new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
        default:
            break;
    }

}

function buttonActive(currentKey){
    var buttonAnime=document.querySelector('.'+currentKey)
    buttonAnime.classList.add('pressed');
}