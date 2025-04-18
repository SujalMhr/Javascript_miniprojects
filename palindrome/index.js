const input = document.getElementById("input1");

function check() {
  const value = input.value;
  const reverse = reverseString(value);

  if (value === reverse) {
    alert("It is a palindrome");
  } else {
    alert("It is not a palindrome");
  }

  input.value = "";
}

function reverseString(str) {
  return str.split("").reverse().join("");
}
