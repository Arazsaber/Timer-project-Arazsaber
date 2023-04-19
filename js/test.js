let tags=document.getElementsByTagName('p')
let day,hour,minute,second,millisecond
let day_t,hour_t,minute_t,second_t,millisecond_t
let date1,myInterval
let x1=0
let date2=0
let x=true

function timer(){
    date2=(Date.now()-date1)
    date2+=x1
}

function start() {
    document.getElementById('start').removeAttribute('onclick')
    document.getElementById('reset').removeAttribute('onclick')
    document.getElementById('stop').setAttribute('onclick','stop()')
    date1=Date.now()
    myInterval = setInterval(timer,1);

}

function stop(){
    x1=date2
    clearInterval(myInterval);
    document.getElementById('stop').innerHTML='Resume'
    document.getElementById('stop').setAttribute('onclick','resume()')
    document.getElementById('reset').setAttribute('onclick','reset()')
}

function resume(){
    date1=Date.now()
    myInterval = setInterval(timer,10);
    document.getElementById('stop').innerHTML='Stop'
    document.getElementById('stop').setAttribute('onclick','stop()')
    document.getElementById('reset').removeAttribute('onclick')
}

function reset(){
    document.getElementById('start').setAttribute('onclick','start()')
    document.getElementById('stop').innerHTML='Stop'
    document.getElementById('stop').removeAttribute('onclick')
    clearInterval(myInterval);
    date2=0
    x1=0
}
setInterval(set_tag,1)
function set_tag(){
    millisecond_t=date2
    second_t=Math.floor(millisecond_t/1000) 
    minute_t=Math.floor(second_t/60)
    hour_t=Math.floor(minute_t/60)
    day_t=Math.floor(hour_t/24)
    millisecond=millisecond_t%1000
    second=second_t%60
    minute=minute_t%60
    hour=hour_t%24
    day=day_t
    tags[id='millisecond'].innerHTML=millisecond+'<br>millisecond'
    tags[id='millisecond_t'].innerHTML='Total time in millisecond: '+millisecond_t
    tags[id='second'].innerHTML=second+'<br>second'
    tags[id='second_t'].innerHTML='Total time in second: '+second_t
    tags[id='minute'].innerHTML=minute+'<br>minute'
    tags[id='minute_t'].innerHTML='Total time in minute: '+minute_t
    tags[id='hour'].innerHTML=hour+'<br>hour'
    tags[id='hour_t'].innerHTML='Total time in hour: '+hour_t
    tags[id='day'].innerHTML=day+'<br>day'
    tags[id='day_t'].innerHTML='Total time in day: '+day 
}