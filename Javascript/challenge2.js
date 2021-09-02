function calculate(mass ,height) {
    var bmi=mass/(height*height);
    return bmi ;
}

function resultLog(mark,john){
    let markHigherBMI = mark>john;
    console.log(markHigherBMI); 
    if(markHigherBMI){
    console.log("Mark's BMI is higher than John's!");
    }
    else{
    console.log("John's BMI is higher than Mark's!");
    }
}


let mark =calculate(78,1.69);
let john=calculate(92,1.95);
resultLog(mark,john);

mark =calculate(95,1.88);
john=calculate(85,1.76);
resultLog(mark,john);
