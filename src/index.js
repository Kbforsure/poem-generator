let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

function generatePoem(event) {
  event.preventDefault();
  alert("Generating your poem...");
}
