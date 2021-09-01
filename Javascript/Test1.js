function calculate(mass ,height) {
    var bmi = mass/(height*height);
    return bmi ;
}
let mark =calculate(78,1.69);
let john=calculate(92,1.95);
let markHigherBMI = mark>john;
  console.log(markHigherBMI); 

mark =calculate(95,1.88);
john=calculate(85,1.76);
markHigherBMI = mark>john;
  console.log(markHigherBMI); 