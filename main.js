const submitButton = document.querySelector("#submit");
const emailForm = document.querySelector(".emailForm");
const emailInput = document.querySelector("#email");
const emailTest = /.\w*@.\w*\..\w*/;

submitButton.addEventListener("click", function(e) {
  if (emailInput.value == "" || !emailTest.test(emailInput.value)) {
    emailForm.classList.add("wrong");
    submitButton.classList.remove("rightIcon");
    submitButton.classList.add("wrongIcon");
  }
  if (!emailTest.test(emailInput.value)) {
    emailInput.value = "";
    emailInput.placeholder = "Please Enter a Vaild Email";
  }
});

emailInput.addEventListener("click", function(e) {
  emailForm.classList.remove("wrong");
  submitButton.classList.add("rightIcon");
  submitButton.classList.remove("wrongIcon");
  emailInput.placeholder = "Email Address";
});
