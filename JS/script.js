const ratingsChoosing = document.querySelector(".rating-component");
const form = document.querySelector(".form-container");
const rateSelected = document.querySelector(".selected-rating-message");
const result = document.querySelector(".result-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const rate = form.rating.value;
    rateSelected.textContent = "You selected " + rate + " out of 5";
    ratingsChoosing.classList.add("hidden");
    result.classList.remove("hidden");
    document.querySelector(".result-container").removeAttribute("hidden");
  });

document.getElementsByName("rating").forEach((item) => {
    item.onchange = function () {
      document.getElementById("btn-submit").removeAttribute("disabled");
    };
  });