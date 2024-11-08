document.getElementById("pay").addEventListener("click", function (event) {
  var paymentMethod = document.querySelector(
    'input[name="paymentMethod"]:checked'
  );
  var errors = [];

  // Validate the payment method
  if (!paymentMethod) {
    errors.push("Please select a payment method.");
  }

  // Perform other form field validations as needed
  var nameofcardInput = document.getElementById("nameofcard");
  var cwInput = document.getElementById("cw");
  var cardnumberInput = document.getElementById("cardnumber");
  var expiryInput = document.getElementById("expiry");

  if (nameofcardInput.value.trim() === "") {
    errors.push("Please enter the card owner's name.");
  }

  if (cwInput.value.trim() === "") {
    errors.push("Please enter the CW (Card Verification Value).");
  }

  if (cardnumberInput.value.trim() === "") {
    errors.push("Please enter the card number.");
  }

  if (expiryInput.value.trim() === "") {
    errors.push("Please enter the card expiry date.");
  }

  if (errors.length > 0) {
    // Display validation errors as a single alert message
    alert("Validation Errors:\n\n" + errors.join("\n"));
    event.preventDefault();
  } else {
    var result = confirm(
      "Please confirm your purchase with " + paymentMethod.value + "."
    );
    if (!result) {
      event.preventDefault();
    } else {
      alert("Thank you for your purchase.");
    }
  }
});


const paymentLabels = document.querySelectorAll(".box-button label");
paymentLabels.forEach((label) => {
  label.addEventListener("click", function () {

    paymentLabels.forEach((lbl) => {
      lbl.classList.remove("selected");
    });

    label.classList.add("selected");
  });
});

const creditCardInput = document.getElementById("cardnumber");

creditCardInput.addEventListener("input", function () {
  const formattedValue = this.value.replace(/[^\d ]/g, "");


  const digitsOnly = formattedValue.replace(/\s/g, "");

  if (digitsOnly.length === 16) {
    this.style.borderColor = "green";
    this.style.background =
      "url(./assets/images/correct.png) right/contain no-repeat";
  } else {
    this.style.borderColor = "red";
    this.style.background =
      "url(./assets/images/wrong.png) right/contain no-repeat";


    this.value = digitsOnly.slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
  }


  const formatted = formattedValue.replace(/(\d{4})(?=\d)/g, "$1 ");


  this.value = formatted.slice(0, 19);
});

creditCardInput.addEventListener("keypress", function (event) {
 
  const digitsOnly = this.value.replace(/\s/g, "");
  if (!/[0-9]/.test(event.key)) {
    alert("Please enter a valid number.");
    event.preventDefault(); 
  } else if (digitsOnly.length >= 16) {
    event.preventDefault();
  }
});
