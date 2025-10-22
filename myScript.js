alert(9)
document.getElementById("user-time").textContent = Date.now();

setInterval(() => {
  document.getElementById("user-time").textContent = Date.now();
}, 1000);

//const form = document.querySelector("form");
//const email = document.getElementById("email");
//const emailError = document.getElementById("error-email");
//alert(9)
//email.addEventListener("input", (event) => {
//  if (email.validity.valid) {
//    emailError.textContent = ""; // Remove the message content
//    emailError.className = "error"; // Removes the `active` class
//  } else {
//    // If there is still an error, show the correct error
//    showError();
//  }
//});
//
//form.addEventListener("submit", (event) => {
//  // if the email field is invalid
//  if (!email.validity.valid) {
//    // display an appropriate error message
//    showError();
//    // prevent form submission
//    event.preventDefault();
//  }
//});
//
//emailError.innerText = 'Hello'
//
//function showError() {
//  if (email.validity.valueMissing) {
//    // If empty
//    emailError.textContent = "You need to enter an email address.";
//  } else if (email.validity.typeMismatch) {
//    // If it's not an email address,
//    emailError.textContent = "Entered value needs to be an email address.";
//  } else if (email.validity.tooShort) {
//    // If the value is too short,
//    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
//  }
//  // Add the `active` class
//  emailError.className = "error active";
//}