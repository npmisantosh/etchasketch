/*create a 16x16 grid with div
 */
const sb = document.getElementById("b16");
const mb = document.getElementById("b32");
const bb = document.getElementById("b64");
const cb = document.getElementById("bcustom");
const bc = document.getElementById("bclear");
const gridbox = document.querySelector(".gridbox");
createGrid(32);
let x = 0;
const colors = [
  "red",
  "blue",
  "yellow",
  "black",
  "green",
  "brown",
  "purple",
  "orange",
];

sb.addEventListener("click", function () {
  createGrid(16);
});
mb.addEventListener("click", function () {
  createGrid(32);
});
bb.addEventListener("click", function () {
  createGrid(64);
});

cb.addEventListener("click", function () {
  x = Number(window.prompt("how many boxes do you want?"));
  createGrid(x);
});

bc.addEventListener("click", function () {
  gridbox.replaceChildren();
  createGrid(16);
});

function createGrid(size) {
  gridbox.replaceChildren();
  for (let rows = 1; rows <= size; rows++) {
    const div = document.createElement("div");
    gridbox.appendChild(div);
    for (let boxes = 1; boxes <= size; boxes++) {
      const testdiv = document.createElement("div");
      testdiv.style.width = 300 / size + `px`;
      testdiv.style.height = 300 / size + `px`;
      testdiv.style.backgroundColor = "white";
      testdiv.addEventListener("mouseover", () => {
        testdiv.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
      });
      div.appendChild(testdiv);
    }
  }
}
