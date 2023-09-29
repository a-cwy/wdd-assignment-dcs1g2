let slideIndex = 1;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Initial display
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Automatic slideshow
setInterval(function () {
  currentSlide(slideIndex + 1);
}, 2000);

var EventElements1 = document.getElementsByClassName("box-event1");
var insideEventElements1 = document.getElementById("inside-box-event1"); // Use getElementById for single element
insideEventElements1.style.opacity = "0";
for (var i = 0; i < EventElements1.length; i++) {
  EventElements1[i].addEventListener("click", function () {
    // Get the current transform value
    var currentTransform = this.style.transform;

    // Check if the element is currently translated
    if (currentTransform === "translateX(-160px)") {
      this.style.transform = "none";
      insideEventElements1.style.transform = "none";
      insideEventElements1.style.opacity = "0";
    } else {
      this.style.transform = "translateX(-160px)";
      insideEventElements1.style.opacity = "1";
      insideEventElements1.style.transform = "translateX(290px)";
    }
  });
}

var EventElements2 = document.getElementsByClassName("box-event2");
var insideEventElements2 = document.getElementById("inside-box-event2");
insideEventElements2.style.opacity = "0";
for (var i = 0; i < EventElements2.length; i++) {
  EventElements2[i].addEventListener("click", function () {
    var currentTransform = this.style.transform;

    if (currentTransform === "translateX(-265px)") {
      this.style.transform = "none";
      insideEventElements2.style.transform = "none";
      insideEventElements2.style.opacity = "0";
    } else {
      this.style.transform = "translateX(-265px)";
      insideEventElements2.style.opacity = "1";
      insideEventElements2.style.transform = "translateX(290px)";
    }
  });
}

var EventElements3 = document.getElementsByClassName("box-event3");
var insideEventElements3 = document.getElementById("inside-box-event3");
insideEventElements3.style.opacity = "0";
for (var i = 0; i < EventElements3.length; i++) {
  EventElements3[i].addEventListener("click", function () {
    var currentTransform = this.style.transform;

    if (currentTransform === "translateX(-265px)") {
      this.style.transform = "none";
      insideEventElements3.style.transform = "none";
      insideEventElements3.style.opacity = "0";
    } else {
      this.style.transform = "translateX(-265px)";
      insideEventElements3.style.opacity = "1";
      insideEventElements3.style.transform = "translateX(290px)";
    }
  });
}
