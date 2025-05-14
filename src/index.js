function handleClick(event) {
  event.preventDefault();
  alert("Hooray!");
  let button = document.querySelector("#special-button");
  button.style.background = "magenta";
  button.innerHTML = "Oops";
  let heading = document.querySelector("#heading");
  heading.classList.toggle("highlight");
  heading.innerHTML = "You dared!";
  let footer = document.querySelector("#footer");
  footer.classList.toggle("hidden");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
console.log(buttonElement.attributes);
buttonElement.setAttribute("class", "danger");

// setAttributes
// element.style.marginRight = '10px';
// element.classList.addd("special");
// element.classList.remove("special");
// element.classList.toggle("special");
