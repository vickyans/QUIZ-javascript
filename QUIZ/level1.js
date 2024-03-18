/*correct answers variables*/
const answer1 = document.getElementById("option1a");
const answer2 = document.getElementById("option2e");
const answer3 = document.getElementById("option3f");
const answer4 = document.getElementById("option1g");
const answer5 = document.getElementById("option4h");
const answer6 = document.getElementById("option4i");
const answer7 = document.getElementById("option3j");
const answer8 = document.getElementById("option3k");
const answer9 = document.getElementById("option2l");
/*variables of wrong answers*/
const wrongAnswer1 = document.getElementById("option2a");
const wrongAnswer2 = document.getElementById("option3a");
const wrongAnswer3 = document.getElementById("option4a"); //for question 1.

const wrongAnswer4 = document.getElementById("option1e");
const wrongAnswer5 = document.getElementById("option3e");
const wrongAnswer6 = document.getElementById("option4e"); //for question 2.

const wrongAnswer7 = document.getElementById("option1f");
const wrongAnswer8 = document.getElementById("option2f");
const wrongAnswer9 = document.getElementById("option4f"); //for question 3.

const wrongAnswer10 = document.getElementById("option2g");
const wrongAnswer11 = document.getElementById("option3g");
const wrongAnswer12 = document.getElementById("option4g"); //for question 4.

const wrongAnswer13 = document.getElementById("option1h");
const wrongAnswer14 = document.getElementById("option2h");
const wrongAnswer15 = document.getElementById("option3h"); //for question 5.

const wrongAnswer16 = document.getElementById("option1i");
const wrongAnswer17 = document.getElementById("option2i");
const wrongAnswer18 = document.getElementById("option3i"); //for question 6.

const wrongAnswer19 = document.getElementById("option1j");
const wrongAnswer20 = document.getElementById("option2j");
const wrongAnswer21 = document.getElementById("option4j"); //for question 7.

const wrongAnswer22 = document.getElementById("option1k");
const wrongAnswer23 = document.getElementById("option2k");
const wrongAnswer24 = document.getElementById("option4k"); //for question 8.

const wrongAnswer25 = document.getElementById("option1l");
const wrongAnswer26 = document.getElementById("option3l");
const wrongAnswer27 = document.getElementById("option4l"); //for question 9.

/* variables of the question sheeets */
const question1 = document.querySelector(".one");
const doneButto = document.getElementById("myButton");
const question2 = document.querySelector(".two");
const question3 = document.querySelector(".three");
const question4 = document.querySelector(".four");
const question5 = document.querySelector(".five");
const question6 = document.querySelector(".six");
const question7 = document.querySelector(".seven");
const question8 = document.querySelector(".eight");
const question9 = document.querySelector(".nine");
let score = 0;
const textScore = document.getElementById("score");
let stat = 0;
const textStat = document.getElementById("stat");

doneButto.addEventListener("click", function () {
  if (answer1.checked) {
    question1.style.backgroundColor = "green";
    score++;
    textScore.innerText = score;
    stat++;
    textStat.innerHTML = stat;
  } else {
    question1.style.backgroundColor = "purple";
  }
  if (answer2.checked) {
    question2.style.backgroundColor = "green";
    score++;
    textScore.innerText = score;
    stat++;
    textStat.innerHTML = stat;
  } else {
    question2.style.backgroundColor = "red";
  }
  if (answer3.checked) {
    question3.style.backgroundColor = "green";
    score++;
    textScore.innerText = score;
    stat++;
    textStat.innerHTML = stat;
  } else {
    question3.style.backgroundColor = "red";
  }
  if (answer4.checked) {
    question4.style.backgroundColor = "green";
    score++;
    textScore.innerText = score;
    stat++;
    textStat.innerHTML = stat;
  } else {
    question4.style.backgroundColor = "red";
  }
  if (answer5.checked) {
    question5.style.backgroundColor = "green";
    score++;
    textScore.innerText = score;
    stat++;
    textStat.innerHTML = stat;
  } else {
    question5.style.backgroundColor = "red";
  }
  if (answer6.checked) {
    question6.style.backgroundColor = "green";
    score++;
    textScore.innerText = score;
    stat++;
    textStat.innerHTML = stat;
  } else {
    question6.style.backgroundColor = "red";
  }
  if (answer7.checked) {
    question7.style.backgroundColor = "green";
    score++;
    textScore.innerText = score;
    stat++;
    textStat.innerHTML = stat;
  } else {
    question7.style.backgroundColor = "red";
  }
  if (answer8.checked) {
    question8.style.backgroundColor = "green";
    score++;
    textScore.innerText = score;
    stat++;
    textStat.innerHTML = stat;
  } else {
    question8.style.backgroundColor = "red";
  }
  if (answer9.checked) {
    question9.style.backgroundColor = "green";
    score++;
    textScore.innerText = score;
    stat++;
    textStat.innerHTML = stat;
  } else {
    question9.style.backgroundColor = "red";
  }
  textScore.innerHTML = Math.round((score / 9) * 100);
});
