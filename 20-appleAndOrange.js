function appleAndOrange(s,t,a,b,apples,oranges){
    let appleCount = 0;
    let orangeCount = 0;
    apples.forEach((x) => {if((a+x) >= s && (a+x) <= t) appleCount++});
    oranges.forEach((x) => {if((b+x) >= s && (b+x) <= t) orangeCount++});
    console.log(appleCount);
    console.log(orangeCount);
}
appleAndOrange(7,10,4,12,[2,3,-4],[3,-2,-4]);