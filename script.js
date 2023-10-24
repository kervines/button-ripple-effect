const btnEl = document.querySelector(".btn");

function randomColor() {
  return Math.floor(Math.random() * 256);
}

btnEl.addEventListener("mouseover", (event) => {
  const r = randomColor();
  const g = randomColor();
  const b = randomColor();

  console.log(r, g, b);

  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", `${x}px`);
  btnEl.style.setProperty("--yPos", `${y}px`);

  btnEl.style.setProperty("--colors", `rgb(${r},${g},${b})`);
});

// --colors: rgb(121, 212, 121);
