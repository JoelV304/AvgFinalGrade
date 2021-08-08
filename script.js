let class1= prompt("What were your last 5 tests about? Enter the 1st");
let class2= prompt();
let class3= prompt();
let class4= prompt();
let class5= prompt();
let a= prompt("Grade on 1st test?");
let b= prompt("Grade on 2nd test?");
let c= prompt("Grade on 3rd test?");
let d= prompt("Grade on 4th test?");
let e= prompt("Grade on 5th test?");
let intA= Number(a,10);
let intB= Number(b,10);
let intC= Number(c,10);
let intD= Number(d,10);
let intE= Number(e,10);
let sum= (intA + intB + intC + intD + intE);
let avg= sum/5;

document.getElementById("class1name").innerHTML= class1
document.getElementById("class2name").innerHTML= class2
document.getElementById("class3name").innerHTML= class3
document.getElementById("class4name").innerHTML= class4
document.getElementById("class5name").innerHTML= class5

document.getElementById("class1Grade").innerHTML= a + "%"
document.getElementById("class2Grade").innerHTML= b + "%"
document.getElementById("class3Grade").innerHTML= c + "%"
document.getElementById("class4Grade").innerHTML= d + "%"
document.getElementById("class5Grade").innerHTML= e + "%"

if(a>=91){
  document.getElementById("letterGrade1").innerHTML= "A"
}else if(a>=81){
  document.getElementById("letterGrade1").innerHTML= "B"
}else if(a>=71){
  document.getElementById("letterGrade1").innerHTML= "C"
}else if(a>=60){
  document.getElementById("letterGrade1").innerHTML= "D"
}else{
  document.getElementById("letterGrade1").innerHTML= "F"
}

if(b>=91){
  document.getElementById("letterGrade2").innerHTML= "A"
}else if(b>=81){
  document.getElementById("letterGrade2").innerHTML= "B"
}else if(b>=71){
  document.getElementById("letterGrade2").innerHTML= "C"
}else if(b>=60){
  document.getElementById("letterGrade2").innerHTML= "D"
}else{
  document.getElementById("letterGrade2").innerHTML= "F"
}

if(c>=91){
  document.getElementById("letterGrade3").innerHTML= "A"
}else if(c>=81){
  document.getElementById("letterGrade3").innerHTML= "B"
}else if(c>=71){
  document.getElementById("letterGrade3").innerHTML= "C"
}else if(c>=60){
  document.getElementById("letterGrade3").innerHTML= "D"
}else{
  document.getElementById("letterGrade3").innerHTML= "F"
}

if(d>=91){
  document.getElementById("letterGrade4").innerHTML= "A"
}else if(d>=81){
  document.getElementById("letterGrade4").innerHTML= "B"
}else if(d>=71){
  document.getElementById("letterGrade4").innerHTML= "C"
}else if(d>=60){
  document.getElementById("letterGrade4").innerHTML= "D"
}else{
  document.getElementById("letterGrade4").innerHTML= "F"
}

if(e>=91){
  document.getElementById("letterGrade5").innerHTML= "A"
}else if(e>=81){
  document.getElementById("letterGrade5").innerHTML= "B"
}else if(e>=71){
  document.getElementById("letterGrade5").innerHTML= "C"
}else if(e>=60){
  document.getElementById("letterGrade5").innerHTML= "D"
}else{
  document.getElementById("letterGrade5").innerHTML= "F"
}

console.log(typeof intA);

document.getElementById("percentAvg").innerHTML= avg +"%"

if(avg>=91){
  document.getElementById("letterAvg").innerHTML= "A"
}else if(avg>=81){
  document.getElementById("letterAvg").innerHTML= "B"
}else if(avg>=71){
  document.getElementById("letterAvg").innerHTML= "C"
}else if(avg>=60){
  document.getElementById("letterAvg").innerHTML= "D"
}else{
  document.getElementById("letterAvg").innerHTML= "F"
}
