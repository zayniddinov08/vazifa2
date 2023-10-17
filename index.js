let elformbtn = document.querySelector(".button")
//let formbtn = document.querySelector(".f1")
let elInput = document.querySelector(".input")
let elinput1 = document.querySelector(".input1")
let elinput2 = document.querySelector(".input2")

elformbtn.addEventListener("click", (e) => {
    e.preventDefault()
    if(elInput.value == "admin"){
        elInput.style.border = "2px solid green"
        elInput.value = "Send"
    }
    else{
        elInput.style.border = "2px solid red"
    }
    if(elinput1.value == "123"){
        elinput1.style.border = "2px solid green"
        elinput1.value = "Send"
    }
    else{
        elinput1.style.border = "2px solid red"

    }
    if(elinput2.value == "2" || elinput2.value == "3"){
        elinput2.style.border = "2px solid green"
        elinput2.value = "Send"
    } 
    else{
        elinput2.style.border = "2px solid red"
    }
})