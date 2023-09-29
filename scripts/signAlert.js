
/* Sign In alert message */
document.addEventListener("DOMContentLoaded", function() {
    const returnUrl = new URLSearchParams(window.location.search).get("returnUrl");
    const signInForm = document.getElementById("loginForm");

    signInForm.addEventListener("submit", function(event) {
        event.preventDefault();

    
        const signInSuccessful = true;

        if (signInSuccessful) {
            alert("Sign-in successful!");

            if (returnUrl) {
                window.location.href = returnUrl;
            } else {
                window.location.href = "shop.html"; 
            }
        } else {
            alert("Sign-in failed. Please try again.");
        }
    });

});


/* Sign Up alert message */
document.addEventListener("DOMContentLoaded", function() {
    const returnUrl = new URLSearchParams(window.location.search).get("returnUrl");
    const signInForm = document.getElementById("signupForm");

    signInForm.addEventListener("submit", function(event) {
        event.preventDefault();

    
        const signInSuccessful = true;

        if (signInSuccessful) {
            alert("Sign-up successful!");

            if (returnUrl) {
                window.location.href = returnUrl;
            } else {
                window.location.href = "login.html"; 
            }
        } else {
            alert("Sign-in failed. Please try again.");
        }
    });

});


/* Forgot password alert message */
document.addEventListener("DOMContentLoaded", function() {
    const returnUrl = new URLSearchParams(window.location.search).get("returnUrl");
    const signInForm = document.getElementById("forgotForm");

    signInForm.addEventListener("submit", function(event) {
        event.preventDefault();

    
        const signInSuccessful = true;

        if (signInSuccessful) {
            alert("Reset Password successful!");

            if (returnUrl) {
                window.location.href = returnUrl;
            } else {
                window.location.href = "login.html"; 
            }
        } else {
            alert("Sign-in failed. Please try again.");
        }
    });

});


