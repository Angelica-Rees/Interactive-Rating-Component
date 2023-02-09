const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton =document.getElementById("submit")
const rateAgainButton = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.classList.add("hidden")
});

rateAgainButton.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.classList.remove("hidden")
    rating.innerHTML = 5
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
});