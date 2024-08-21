function reset() {
  document.getElementById("inputvalue").value = "";
}
function numbersonly(e) {
  if (isNaN(e.key) && !["+", "-"].includes(e.key)) e.preventDefault();
}
function outvalue(num) {
  document.getElementById("inputvalue").value =
    document.getElementById("inputvalue").value + num;
}
function output() {
  var text = document.getElementById("inputvalue").value;
  var sum = eval(text);
  document.getElementById("inputvalue").value = sum;
}
