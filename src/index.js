function handleClick(event) {
  event.preventDefault();
  alert("Hooray!");
  let button = document.querySelector("button");
  button.style.background = "magenta";
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
console.log(buttonElement.attributes);
buttonElement.setAttribute("class", "danger");
