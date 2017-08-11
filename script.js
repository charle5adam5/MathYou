const first = document.getElementById("first");
const equation = document.getElementById("equation");
const second = document.getElementById("second");
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const health = document.getElementById("health");
const points = document.getElementById("points");

let life = 5;
health.innerHTML = parseInt(life);

let point = 0;
points.innerHTML = parseInt(point);

let operators = ["+", "-", "*", "/"];

function getSign() {
sign = operators[Math.floor(Math.random() * operators.length)];
equation.innerHTML = sign;
return equation;
}
getSign();

function getNumbers() {
 let numberOne = Math.floor(Math.random() * 10);
 let numberTwo = Math.floor(Math.random() * 10);

 first.innerHTML = numberOne;
 second.innerHTML = numberTwo;
}
getNumbers();

function addition() {
math = parseInt(first.textContent) + parseInt(second.textContent);
if(equation.innerHTML == "+" && answer.value == math) {
 result.innerHTML = "Correct";
 setTimeout(function() {
  result.innerHTML = "";
}, 1000);
 point++;
 points.innerHTML = parseInt(point);
  if(point == 10) {
 alert("Great Job!");
}
 getNumbers();
 getSign();
}else {
 result.innerHTML = "Incorrect";
 life--;
 health.innerHTML = parseInt(life);
  if(life == 0) {
 alert("Game Over");
}
}
answer.value = "";
}

function subtraction() {
math = parseInt(first.textContent) - parseInt(second.textContent);
if(equation.innerHTML == "-" && answer.value == math) {
 result.innerHTML = "Correct";
 setTimeout(function() {
  result.innerHTML = "";
}, 1000);
 point++;
 points.innerHTML = parseInt(point);
   if(point == 10) {
 alert("Great Job!");
}
 getNumbers();
 getSign();
}else {
 result.innerHTML = "Incorrect";
 life--;
 health.innerHTML = parseInt(life);
  if(life == 0) {
 alert("Game Over");
}
}
answer.value = "";
}

function multiplication() {
math = parseInt(first.textContent) * parseInt(second.textContent);
if(equation.innerHTML == "*" && answer.value == math) {
 result.innerHTML = "Correct";
 setTimeout(function() {
  result.innerHTML = "";
}, 1000);
 point++;
 points.innerHTML = parseInt(point);
   if(point == 10) {
 alert("Great Job!");
}
 getNumbers();
 getSign();
}else {
 result.innerHTML = "Incorrect";
 life--;
 health.innerHTML = parseInt(life);
  if(life == 0) {
 alert("Game Over");
}
}
answer.value = "";
}

function division() {
math = parseInt(first.textContent) / parseInt(second.textContent);
if(equation.innerHTML == "/" && answer.value == math) {
 result.innerHTML = "Correct";
 setTimeout(function() {
  result.innerHTML = "";
}, 1000);
 point++;
 points.innerHTML = parseInt(point);
   if(point == 10) {
 alert("Great Job!");
}
 getNumbers();
 getSign();
}else {
 result.innerHTML = "Incorrect";
 life--;
 health.innerHTML = parseInt(life);
  if(life == 0) {
 alert("Game Over");
}
}
answer.value = "";
}

submit.addEventListener("click", function(e) {
e.preventDefault();
if(equation.innerHTML == "+") {
 return addition();
}
else if(equation.innerHTML == "-") {
 return subtraction();
}
else if(equation.innerHTML == "*") {
 return multiplication();
}
else if(equation.innerHTML == "/") {
 return division();
}
answer.value = "";
});
