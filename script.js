const modal = document.querySelector(".modal");
const buttons = document.querySelectorAll(".btn");
const star = document.querySelector(".summary-star");

function selectedButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains("selected")) {
    turnOffPreviousButton();
    button.classList.add("selected");
  }
}

function turnOffPreviousButton() {
  const selected = document.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }
}

function showModal() {
  const selected = document.querySelector(".selected");
  if (selected) {
    modal.style.display = "flex";
  } else {
    alert("Please rate us before submitting.");
  }
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
     star.innerText = button.value;
  });
});
