var img = [];
img[0] = 'url("one.jpg")';
img[1] = 'url("two.jpg")';
img[2] = 'url("three.jpg")';
img[3] = 'url("for.jpg")';
var aheader = [];
aheader[0] = 'test.html';
aheader[1] = 'decoration.html';
aheader[2] = 'access.html';
aheader[2] = 'clothe.html';
var hh = [];
hh[0] = "Пройди тест и помоги улучшить сайт";
hh[1] = "Новый год на пороге";
hh[2] = "Самые необычные украшения";
hh[3] = "Новое поступление";
function changeBG(){
var i = Math.floor(Math.random()*img.length);
var elem = document.getElementsByTagName("header");
var h = document.getElementById("hedr");
var a = document.getElementById('sil');
elem[0].style.backgroundImage = img[i];
h.innerHTML = hh[i];
a.setAttribute("href", "clothe.html");
}
function give(obj){
var elem = document.getElementById(obj)
if(!elem.classList.contains('show')){
    elem.classList.add('show');}
}
function dell(obj){
document.getElementById(obj).classList.remove('show');
}

function countMaxScore(elements) {
  var tmpScore = 0;
  var count = 0;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].hasAttribute('data-true') && elements[i].getAttribute('data-true') == "5") {
       tmpScore += parseInt(elements[i].getAttribute('data-true'));
       count+=1;
    }
  }
  tmpScore = tmpScore/count;
  return tmpScore;
}

function radioCheckAnswer(answers) {
  var tmpScore = 0;
  for (var i = 0; i < answers.length; i++) {
      if (answers[i].hasAttribute('data-true') && answers[i].checked) {
          tmpScore += parseInt(answers[i].getAttribute('data-true'));
        }
    }
  return tmpScore;
}

function textAnswer(answer) {
  var tmpScore = 0;
  var correct = answer.getAttribute('dataans').toLowerCase();
  if (answer.value.toLowerCase() == correct) {
     tmpScore += parseInt(answer.getAttribute('data-true'));
  }
  return tmpScore;
}

function score() {
  var test = document.getElementById('test');
  var elements = test.getElementsByTagName('input');
  var maxScore = countMaxScore(elements);
  var userScore = 0;
  var i = 0;
  var queName;
  var answers;
  while (i < elements.length) {
    queName = elements[i].getAttribute('name');
    answers=[];
    while (i < elements.length && elements[i].getAttribute('name') == queName){
       answers[answers.length] = elements[i];
       i++;
    }
    if (answers.length > 0) {
       if (answers[0].getAttribute('type') == 'radio' || answers[0].getAttribute('type') == 'checkbox') {
          userScore += radioCheckAnswer(answers);
        } 
        else if (answers[0].getAttribute('type') == 'text'){
          userScore += textAnswer(answers[0]);
        }
    }
  }
  alert("Ваша оценка: " + userScore/7 + "\nИз: " + maxScore);
}

function plus(){
var a = document.getElementById("corzina");
var txt = a.textContent;
var CountCorz = parseInt(txt);
CountCorz += 1;
a.innerHTML = CountCorz;
}