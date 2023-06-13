const emailInput = document.querySelector("input");
const submitBtn = document.querySelector(".submit-btn");


function emailChecker() {

    var eMail = emailInput.value;
    const mail = document.querySelector("input");
    const m2 = mail.value;
    const emailDiv = document.querySelector("#email");
    if (eMail != "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)) {
        console.log("success")
        return true;
    } else {
        console.log("FAIL")

        // Change field border color and background
        emailDiv.style.borderColor = "red";
        emailDiv.style.backgroundColor = "pink";

        // create message

        // append message

        // style message
        
        return false;
    }
}


submitBtn.addEventListener("click", () => {
    emailChecker()
})