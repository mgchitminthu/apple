let myFunction = () => {
  let ulContainer = document.querySelector("#ulContainer");
    ulContainer.classList.toggle("open");
};
// carousel
document.querySelector("#prev").onclick = prev;
document.querySelector("#next").onclick = next;
setInterval(next, 3000);
let img = 1;
function prev() {
  document.querySelector("#img" + img).style.display = "none";
  img--;
  if (img === 0) img = 5;
  document.querySelector("#img" + img).style.display = "inline";
}

function next() {
  document.querySelector("#img" + img).style.display = "none";
  img++;
  if (img > 5) img = 1;
  document.querySelector("#img" + img).style.display = "inline";
}
