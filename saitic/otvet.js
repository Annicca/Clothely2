function radioCheckAnswer(answers) {
    var tmpScore = 0;
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].hasAttribute('data-true') && answers[i].checked){
            tmpScore += parseInt(answers[i].getAttribute('data-true'));
        }
    }
    return tmpScore;
} 


function textAnswer(answer) {
    var tmpScore = 0;
    var userot = answer.getAttribute('data-ans').toLowerCase();
    if (answer.value.toLowerCase() == userot) {
        tmpScore += parseInt(answer.getAttribute('data-true'));
    }
    return tmpScore;
}

function jotvet(){
    var test = document.getElementById('test');
    var elements = test.getElementsByTagName('input');
    var maxball = 0;
    var useransw = 0;
    var queName;
    var answers;
    var i = 0;

    while (i < elements.length){
  	 queName = elements[i].getAttribute('name');
  	 answers=[];
     while (i < elements.length && elements[i].getAttribute('name') == queName){
          answers[answers.length] = elements[i];
          i++;
        }
     if (answers.length > 0) { 
       if (answers[0].getAttribute('type') == 'radio' || answers[0].getAttribute('type') == 'checkbox') {
           useransw += radioCheckAnswer(answers);   
        }
       else if (answers[0].getAttribute('type') == 'text'){
 	       useransw += textAnswer(answers[0]);
        }
     }
    }
    for (var j = 0; j < elements.length; j++){
       if (elements[j].hasAttribute('data-true')){
          maxball += parseInt(elements[j].getAttribute('data-true'));
        }
    }
  alert("Ваш балл: " + useransw + "\nмаксимальный балл: " + maxball);
}