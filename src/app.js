/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racon"];
var result = "";

window.onload = function() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        result = pronoun[i] + adj[j] + noun[k] + ".com";
        document.querySelector.innerHTML = result;
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
};
