//clock
//variables

const HourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondsHand = document.getElementById('seconds');


//funtions clock

function setTime(){
    const currentDate = new Date();
    const secondRatio =  currentDate.getSeconds() /60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) /60;
    const hourRatio =  ( minuteRatio + currentDate.getHours()) /12;

    wareegSamee(secondsHand, secondRatio);
    wareegSamee(minuteHand, minuteRatio );
    wareegSamee(HourHand, hourRatio)
}

function wareegSamee(element, rotaionRatio){
    element.style.setProperty('--wareeg', rotaionRatio * 360);
}
setTime();
setInterval(setTime, 1000);

//Buttons
//Variables

const btnOne = document.getElementsByClassName('button1');
const btnTwo = document.getElementsByClassName('button2');
const btnThree = document.getElementsByClassName('button3');
const btnFour = document.getElementsByClassName('button4');
const clock = document.querySelector('.clock');
const button = document.querySelectorAll('.button');

//changing node list to an array -->
const buttonAray = Array.from(button)
const colors = ['#fad490', '#f19292', '#edf0f2', '#ffe100']


//Eventlistenners
buttonAray[0].addEventListener('click', changeToOrange);
buttonAray[1].addEventListener('click', changeToRed);
buttonAray[2].addEventListener('click', changeToGrey);
buttonAray[3].addEventListener('click', changeToYellow);

function changeToOrange() {
    clock.style.background = colors[0];
}
function changeToRed() {
    clock.style.background = colors[1];
}
function changeToGrey() {
    clock.style.background = colors[2];
}
function changeToYellow() {
    clock.style.background = colors[3];
}