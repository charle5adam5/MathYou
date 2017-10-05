var first = document.getElementById("first");
var equation = document.getElementById("equation");
var second = document.getElementById("second");
var answer = document.getElementById("answer");
var submit = document.getElementById("submit");
var result = document.getElementById("result");
var health = document.getElementById("health");
var points = document.getElementById("points");

var life = 5;
health.innerHTML = parseInt(life);

var point = 0;
points.innerHTML = parseInt(point);

var operators = ["+", "-", "*", "/"];

function getSign() {
sign = operators[Math.floor(Math.random() * operators.length)];
equation.innerHTML = sign;
return equation;
}
getSign();

function getNumbers() {
 var numberOne = Math.floor(Math.random() * 10);
 var numberTwo = Math.floor(Math.random() * 10);

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
