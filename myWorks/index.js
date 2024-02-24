var RandomNumber1=Math.floor(Math.random()*6)+1;
var val1='./images/dice'+RandomNumber1+'.png';
document.querySelector('img').setAttribute('src',val1);
var RandomNumber2=Math.floor(Math.random()*6)+1;
var val2='./images/dice'+RandomNumber2+'.png';
document.querySelectorAll('img')[1].setAttribute('src',val2);

if (val1>val2){
    document.querySelector('h1').innerHTML='Player 1 Wins';
}
else if (val1===val2){
    document.querySelector('h1').innerHTML='Draw';
}
else{
    document.querySelector('h1').innerHTML='Player 2 Wins';
}