// JS is used for 
document.querySelector("button").addEventListener("click", () => {
  alert("Welcome to CancEo’s cosmic realm!");
});

const title = document.querySelector("h1");
let i = 0;
const text = "Welcome to CancEo Gaming...";
function typeWriter() {
  if (i < text.length) {
    title.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

