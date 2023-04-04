function gradingStudents(grades){
    for(let i = 0; i<grades.length; i++){
        if((grades[i] + 2)%5==0 && (grades[i]+2)>=40){
            grades[i] = grades[i] + 2;
        }else if((grades[i] + 1)%5==0 && (grades[i]+1)>=40){
            grades[i] = grades[i] + 1;
        }else{
            grades[i] = grades[i]
        }
    }
    return grades
}
console.log(gradingStudents([73,67,38,33]));