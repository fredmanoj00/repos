function Time(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var period='';

    if(hour>12){
        period='PM';
    }
    else{
        period='AM';
    }
    if (hour == 0){
        hour=12;
    }else{
        if(hour>12){
        hour-=12;
        }
    }


    hour=update(hour);
    min=update(min);
    sec=update(sec);

    document.getElementById("clock").innerText=hour+':'+min+':'+sec+' '+period;

    setTimeout(Time,1000);
}
function update(t){
    if(t<10){
        return "0" +t;
    }else{
        return t;
    }
}
Time();