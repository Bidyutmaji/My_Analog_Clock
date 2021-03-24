console.log('Hare Krishna')


function toggle_button(){
    document.querySelector('body').classList.toggle('light');
    if(document.body.classList.contains('light')){
        console.log('Hare Krishna');
        console.log('on');
        localStorage.setItem('light_mode', ('on') );
    }else{
        console.log('off');
        localStorage.setItem('light_mode', 'off');
    }
    
    
}

if(localStorage.getItem('light_mode') == 'on'){
    document.body.classList.toggle('light');
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


//  var class_name = document.querySelector('.light');
//  console.log(class_name);
//  console.log(typeof(class_name));

if(document.body.classList.contains('light')){
    console.log('Hare Krishna');
    console.log('on');
    localStorage.setItem('light_mode', ('on') );
}else{
    console.log('off');
    localStorage.setItem('light_mode', 'off');
}

