function tabulateAnswers() {
  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
  var c4score = 0;
  
  var choices = document.getElementsByTagName('input');
  
  for (i=0; i<choices.length; i++) {
    if
  (choices[i].checked) {
    if
 (choices[i].value == 'c1'){
   c1score = c1score + 1;
    }
    if
 (choices[i].value == 'c2') {
   c2score = c2score + 1;
 }
    if
  (choices[i].value == 'c3') {
    c3score = c3score + 1;
  }
    if 
   (choices[i].value == 'c4') {
     c4score = c4score + 1;
   }
  
  }
 }
 
  var maxscore = Math.max(c1score,c2score,c3score,c4score);
  
  var answerbox = document.getElementById('answer');
  if (c1score == maxscore) {
    answerbox.innerHTML =
      "Your sleep habits are very good! You have healthy habits and little to no trouble sleeping. ";  
  }
  if (c2score == maxscore) {
    answerbox.innerHTML = "Your sleep habits are fairly good! There are areas to target for better sleep but no major worries.";
  }
  if (c3score == maxscore) {
    answerbox.innerHTML =
      "You experience trouble with your sleeping pattern and habits but we can work on those!";
  }
  if (c4score == maxscore) {
    answerbox.innerHTML = "You experience severe trouble with your sleeping habits, there are many areas for improvement which need to be worked on."
  }
}