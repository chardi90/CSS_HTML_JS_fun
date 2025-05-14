function handleClick(event) {
  event.preventDefault();
  alert("Hooray!");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
console.log(buttonElement.attributes);
buttonElement.setAttributeNS("class", "danger");
