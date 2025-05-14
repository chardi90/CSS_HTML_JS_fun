function handleClick(event) {
  event.preventDefault();
  alert("Hooray!");
  let button = document.querySelector("button");
  button.style.background = "magenta";
  button.innerHTML = "Oops";
  let heading = document.querySelector(".heading");
  heading.classList = "highlight";
  heading.innerHTML = "You dared!";
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
console.log(buttonElement.attributes);
buttonElement.setAttribute("class", "danger");
