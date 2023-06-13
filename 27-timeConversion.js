function timeConversion(s) {
    s.split('');
    let hours = parseInt(s[0]+ s[1]);
    let minutes = s[3]+s[4];
    let seconds = s[6]+s[7];
    let periodo = s[8]+s[9];
    if(periodo == "AM" && hours == 12){
        hours = 0;
    }else if(periodo == "PM" && hours < 12){
        hours += 12
    }
    if(hours < 10){
        return `0${hours}:${minutes}:${seconds}`
    }else{
        return `${hours}:${minutes}:${seconds}`
    }

}
console.log(timeConversion("11:00:00PM"));