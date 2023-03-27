function dayOfProgrammer(year) {
    if(year >= 1700 && year <= 2700){
        if(year <= 1917){
            if(year%4==0){
                return `12.09.${year}`
            }else{
                return `13.09.${year}`
            }
        }else if(year >= 1919){
            if(year%400==0 || year%4==0 && year%100!==0){
                return `12.09.${year}`
            }else{
                return `13.09.${year}`
            }
        }else{
            return `26.09.${year}`
        }
    }else{
        return "Year is invalid! Please input a year between 1700 and 2700"
    }
}