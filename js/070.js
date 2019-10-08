const plBtn = document.querySelector(".pl");
const miBtn = document.querySelector(".mi");
const txt = document.querySelector(".txt");
const countTxt = document.querySelector("p");

let counter = 16;
let count = 100;
countTxt.innerHTML = `${counter}px`;
txt.innerHTML = `${count}%`;

const plus = () => {
  if (counter < 20) {
    counter++;
    count += 10;
  } else if (counter == 20) {
    counter == 20;
    return false;
  }
  txt.innerHTML = `${count}%`;
  txt.style.fontSize = `${counter}px`;
  countTxt.innerHTML = `${counter}px`;
};

const minus = () => {
  if (counter > 1) {
    counter--;
    count -= 10;
  } else if (counter == 1) {
    counter == 1;
    return false;
  }
  txt.innerHTML = `${count}%`;
  txt.style.fontSize = `${counter}px`;
  countTxt.innerHTML = `${counter}px`;
};

plBtn.addEventListener("click", plus);
miBtn.addEventListener("click", minus);
