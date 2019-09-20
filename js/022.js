// const hv = document.querySelector(".hidden__venner");
// const hv2 = document.querySelector(".box__hiden__v");
// const btn = hv.querySelector(".btn");
const fixed = document.querySelector(".side__fixed");

// const hidden = () => {
//   hv.classList.add("hidden");
//   hv2.classList.add("hidden2");
// };
// btn.addEventListener("click", hidden);

const scrollFunction = () => {
  if (document.documentElement.scrollTop > 20) {
    fixed.classList.add("show");
  }
};

window.onscroll = function() {
  scrollFunction();
};
