console.log('Hare Krishna')


function toggle_button(){
    document.querySelector('body').classList.toggle('light');
}


const deg=6;
const hrs = document.querySelector('#hr');
const mns = document.querySelector('#mn');
const scs = document.querySelector('#sc');

 setInterval(() => {

let day = new Date()
let hh = day.getHours()*30;
let mm = day.getMinutes()*deg;
let ss = day.getSeconds()*deg;

hrs.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
mns.style.transform = `rotateZ(${mm}deg)`;
scs.style.transform = `rotateZ(${ss}deg)`;

 })