/*create a 16x16 grid with div
 */
const sb = document.getElementById("b16");
const gridbox = document.querySelector(".gridbox");

sb.addEventListener("click", function () {
  createGrid(16);
});

sb.addEventListener("dblclick", function () {
  testdiv.classList.remove();
});

function createGrid(size) {
  gridbox.replaceChildren();
  for (let i = 1; i <= size; i++) {
    const div = document.createElement("div");
    gridbox.appendChild(div);
    for (let j = 1; j <= size; j++) {
      const testdiv = document.createElement("div");
      testdiv.classList.add("box");
      testdiv.addEventListener("mouseover", () => {
        testdiv.classList.add("hover");
      });
      div.appendChild(testdiv);
    }
  }
}
