function generatePoem(event) {
  event.preventDefault();
  alert("Generating your poem...");
}

let poemFormElement = document.querySelector("#poem-button");
poemFormElement.addEventListener("submit", generatePoem);
