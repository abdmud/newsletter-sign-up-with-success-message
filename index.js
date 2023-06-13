const emailInput = document.querySelector("input")
const submitBtn = document.querySelector(".submit-btn")
const successWindow = document.querySelector(".success-card")
const formWindow = document.querySelector(".form-card")
const dismissBtn = document.querySelector(".success-btn")


function emailChecker() {

    var eMail = emailInput.value
    const emailText = document.querySelector(".form-label")
    const emailDiv = document.querySelector("#email")
    if (eMail != "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)) {
        
        successWindow.classList.remove("hidden")
        formWindow.classList.add("hidden")

        return true
    } else {
        // Change field border color and background
        emailDiv.style.borderColor = "red"
        emailDiv.style.backgroundColor = "pink"

        // create message
        let validationMsg = document.createElement("p")
        validationMsg.innerHTML = "Valid email required"
        // append message
        emailText.append(validationMsg)
 
        // style message
        validationMsg.style.color = "red"
        validationMsg.style.fontSize = "12px"
        validationMsg.style.fontWeight = "bold"

        return false
    }
}

submitBtn.addEventListener("click", () => {
    emailChecker()
})

dismissBtn.addEventListener("click", () => {
    successWindow.classList.add("hidden")
    formWindow.classList.remove("hidden")
})