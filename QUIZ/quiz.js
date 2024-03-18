const toggle = document.getElementById("my-toggle");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");
const number7 = document.getElementById("number7");
const number8 = document.getElementById("number8");
const number9 = document.getElementById("number9");
const allLevels = document.querySelector(".levels");

/*button variables*/

const buttonLevel1 = document.getElementById("button-level1");
const buttonRestartLevel1 = document.getElementById("button-restart-level1");
const buttonLevel2 = document.getElementById("button-level2");
const buttonRestartLevel2 = document.getElementById("button-restart-level2");
const buttonLevel3 = document.getElementById("button-level3");
const buttonRestartLevel3 = document.getElementById("button-restart-level3");
const buttonLevel4 = document.getElementById("button-level4");
const buttonRestartLevel4 = document.getElementById("button-restart-level4");
const buttonLevel5 = document.getElementById("button-level5");
const buttonRestartLevel5 = document.getElementById("button-restart-level5");
const buttonLevel6 = document.getElementById("button-level6");
const buttonRestartLevel6 = document.getElementById("button-restart-level6");
const buttonLevel7 = document.getElementById("button-level7");
const buttonRestartLevel7 = document.getElementById("button-restart-level7");
const buttonLevel8 = document.getElementById("button-level8");
const buttonRestartLevel8 = document.getElementById("button-restart-level8");
const buttonLevel9 = document.getElementById("button-level9");
const buttonRestartLevel9 = document.getElementById("button-restart-level9");

/*toggle button activation*/

toggle.addEventListener("change", function () {
  console.log("good");
  const bodyElement = document.body;
  if (this.checked) {
    bodyElement.style.backgroundColor = "black";
    number1.style.backgroundColor = "white";
    number2.style.backgroundColor = "white";
    number3.style.backgroundColor = "white";
    number4.style.backgroundColor = "rgb(125, 125, 125)";
    number5.style.backgroundColor = "rgb(125, 125, 125)";
    number6.style.backgroundColor = "rgb(125, 125, 125)";
    number7.style.backgroundColor = "rgb(56, 54, 54)";
    number8.style.backgroundColor = "rgb(56, 54, 54)";
    number9.style.backgroundColor = "rgb(56, 54, 54)";
    /* allLevels.style.boxShadow = "10px 15px 10px 15px white"; */
  } else {
    bodyElement.style.backgroundColor = "white";
    number1.style.backgroundColor = "green";
    number2.style.backgroundColor = "green";
    number3.style.backgroundColor = "green";
    number4.style.backgroundColor = "blue";
    number5.style.backgroundColor = "blue";
    number6.style.backgroundColor = "blue";
    number8.style.backgroundColor = "red";
    number7.style.backgroundColor = "red";
    number9.style.backgroundColor = "red";
  }
});
/*button setting*/
