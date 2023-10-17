let elFormBtn = document.querySelector(".form__btn")
let elForUsdInput = document.f1.usd__input
let elForUzsInput = document.f1.uzs__input

elFormBtn.addEventListener("click", e => {
    e.preventDefault()

    elForUzsInput.value = elForUsdInput.value * 12219
})