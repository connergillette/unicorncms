// (function () {
'use strict';
// function parseInputs() {
let textInputs = [];
let h1 = document.getElementsByTagName("h1");
let h2 = document.getElementsByTagName("h2");

textInputs = textInputs.concat(h1);
textInputs = textInputs.concat(h2);

for (var i = 0; i < textInputs.length; i++) {
  var currentTag = textInputs[i];
  for (var k = 0; k < textInputs[i].length; k++) {
    currentTag[k].innerHTML = "<input style='color: black' type='text'/>"
  }
}
// }

  // return parseInputs;
// })();