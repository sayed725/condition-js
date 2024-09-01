/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A+: 80-100
    A: 70-79
    A-: 60-69
    B: 50-59
    C: 40-49
    D: 33-39
    F: 0-32

***/

let score = 55;

if( score >= 80){
    console.log("A+");
}
else if( score>=70 && score<=79 ){
    console.log("A");
}
else if (score >=60 && score <=69){
    console.log("A-");
}
else if(score >=50 && score <=59){
    console.log("B");
}
else if (score >=40 && score <=49){
    console.log("C");
}
else if (score >=33 && score <=39){
    console.log("D");
}
 else {
    console.log("F");
 }
