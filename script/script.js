"use strict";

import { kurals } from "./kural.js";

console.log("Connected");

var selected = 0;

document
  .querySelector(".kural__refresh")
  .addEventListener("click", function () {
    document.querySelector("#explore__display").innerHTML = "";
    document.querySelector(".kural__number").value = "";
    exploreLower.classList.add("explore__lower--hidden");
    document
      .querySelector(".status--right")
      .classList.add("status--text--right");
    document
      .querySelector(".status--wrong")
      .classList.add("status--text--wrong");
    document.querySelector(".explore__transcript").innerHTML = "";
  });

document.querySelector(".kural__get").addEventListener("click", function () {
  var kuralNumber = document.querySelector(".kural__number").value;
  console.log(kurals[kuralNumber]);
  selected = kuralNumber;
  document.querySelector("#explore__display").innerHTML = kurals[kuralNumber];
  console.log(selected);
  exploreLower.classList.add("explore__lower--hidden");
  document.querySelector(".status--right").classList.add("status--text--right");
  document.querySelector(".status--wrong").classList.add("status--text--wrong");
});

window.SpeechRecognition = window.webkitSpeechRecognition;
const recognize = new SpeechRecognition();
recognize.interimResults = false;
recognize.continuous = true;
recognize.lang = "ta";

let dansu = document.querySelector(".explore__right-btn-start");

let exploreLower = document.querySelector(".explore__lower--cont");

dansu.addEventListener("click", function () {
  var speech = true;
  recognize.addEventListener("result", function (e) {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript);
    console.log(transcript[0]);
    document.querySelector(".explore__transcript").innerHTML = transcript[0];

    if (transcript[0] == kurals[selected]) {
      console.log("Correct");
      recognize.stop();
      exploreLower.classList.remove("explore__lower--hidden");
      document
        .querySelector(".status--right")
        .classList.remove("status--text--right");
      document
        .querySelector(".status--wrong")
        .classList.add("status--text--wrong");
      document.getElementById("explore__lower--cont").style.backgroundColor =
        "#bdff00";
    } else {
      console.log("Wrong");
      console.log("inside the else" + selected);
      recognize.stop();
      exploreLower.classList.remove("explore__lower--hidden");
      document
        .querySelector(".status--wrong")
        .classList.remove("status--text--wrong");
      document
        .querySelector(".status--right")
        .classList.add("status--text--right");
      document.getElementById("explore__lower--cont").style.backgroundColor =
        "red";
    }
  });

  if (speech == true) {
    recognize.start();
  }
});

document
  .querySelector(".explore__right-btn-stop")
  .addEventListener("click", function () {
    console.log("stop btn works");
    recognize.stop();
    exploreLower.classList.add("explore__lower--hidden");
  });

// Below are Text Validation

/*if (typeof transcript === typeof null) {
  for (let i = 0; i <= kurals.length; i++) {
    console.log(kurals[i]);
    if (transcript[0] == kurals[i]) {
      document.querySelector("#convert_text").innerHTML = transcript;
      recognize.stop();
      document.querySelector(".passed").textContent = "Yes You Passed!";
      document.querySelector(".passed").classList.remove("hidden");
      console.log("Over Passing inside if");
      break;
    } else {
      document.querySelector("#convert_text").innerHTML = transcript;
      recognize.stop();
      console.log("Over Passing inside else");
      document.querySelector(".passed").textContent = "Try Again";
      document.querySelector(".passed").classList.remove("hidden");
    }
  }
  //recognize.stop();
  //document.querySelector("#convert_text").innerHTML = transcript;
  //recognize.stop();
  //document.querySelector(".passed").textContent = "Yes You Passed!";
  //document.querySelector(".passed").classList.remove("hidden");
  //console.log("Over Passing if");
} else {
  document.querySelector("#convert_text").innerHTML = transcript;
  recognize.stop();
  console.log("Over Passing else");
  document.querySelector(".passed").textContent = "Try Again";
  document.querySelector(".passed").classList.remove("hidden");
}
*/
