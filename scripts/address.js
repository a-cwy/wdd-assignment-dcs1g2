document.getElementById("shippingForm").addEventListener("submit", function(event) {
       
    var countryInput = document.getElementById("country-choice");
    var cityInput = document.getElementById("city");
    var stateInput = document.getElementById("state");
    var zipInput = document.getElementById("zip");
    var addressInput = document.getElementById("box-address");


  if (
      countryInput.value.trim() === "" ||
      cityInput.value.trim() === "" ||
      stateInput.value.trim() === "" ||
      zipInput.value.trim() === "" ||
      addressInput.value.trim() === ""
    ) {
     
      alert("Please fill out all fields before submitting.");
      if(countryInput.value.trim() === ""){
        alert("Please enter your country before submitting.");
      }
      if(cityInput.value.trim() === ""){
        alert("Please enter your city before submitting.");
      }
      if(stateInput.value.trim() === ""){
        alert("Please enter your zip before submitting.");
      }
      if(zipInput.value.trim() === ""){
        alert("Please enter your zip before submitting.");
      }
      if(addressInput.value.trim() === ""){
        alert("Please enter your address before submitting.");
      }
      event.preventDefault(); 
    } else {
      let result=confirm("Ensure your information is correct.");
      if(result==true){
          event.preventDefault();
          if(result==true) {alert("Thank you for your purchase.");
      }
      }else{
        event.preventDefault();
      }

    }
});
