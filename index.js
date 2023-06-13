const emailInput = document.querySelector("input")
const submitBtn = document.querySelector(".submit-btn")


function emailChecker() {

    var eMail = emailInput.value
    const emailText = document.querySelector(".form-label")
    const emailDiv = document.querySelector("#email")
    if (eMail != "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)) {
        console.log("success")
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