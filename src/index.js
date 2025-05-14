function handleClick(event) {
  event.preventDefault();
  alert("Hooray!");
}

let buttonElement = document.querySelector("#special-button");
console.log(buttonElement);
buttonElement.addEventListener("click", handleClick);
