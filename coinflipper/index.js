const body = document.getElementsByTagName("body")[0];

function setColor(name) {
  body.style.backgroundColor = name;
}

setColor("green");

function randomColor() {
  const re = Math.round(Math.random() * 255);
  const gree = Math.round(Math.random() * 255);
  const blu = Math.round(Math.random() * 255);

  const color = `rgb(${re}, ${gree} ,${blu} )`;
  body.style.backgroundColor = color;
}

randomColor();
