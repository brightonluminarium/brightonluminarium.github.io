
let slideIndex = 0;
showAutoSlides();

var nextslideTimeout = setTimeout(showAutoSlides, 5000); // Change image every 5 seconds


function showAutoSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  

}


// let slideIndex = 1;
showManSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showManSlides(slideIndex += n);
  ClearTimeout(nextslideTimeout);
}

// Thumbnail image controls
function currentSlide(n) {
  showManSlides(slideIndex = n);
  ClearTimeout(autoSlidesTimeout);
}

function showManSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
