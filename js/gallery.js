// Gallery.js
// This javascript file creates interactivity of image gallery.
// Function openModal
// Opens viewing modal for each image in block display.
function openModal() {
    document.getElementById("myModal").style.display = "block";
} // end function
// Closes viewing modal for viewing an image in the image gallery
function closeModal() {
    document.getElementById("myModal").style.display = "none";
} // end function
// slideIndex (current slide):
let slideIndex = 1;  // Initialise slideIndex integer variable to hold which the number of which slide is being viewed.
showSlides(slideIndex); // display slideshow
// Function moves on to next image in gallery
function plusSlides(n) { // parameter holds slideIndex
    showSlides(slideIndex += n);
} // end function
// Function displays current image in gallery 
function currentSlide(n) { // parameter holds slideIndex
    showSlides(slideIndex = n);
} // end function
// Function displays image slideshow
function showSlides(n) { // parameter holds slideIndex
    let i; // initialise loop counter variable
    let slides = document.getElementsByClassName("mySlides"); // div "mySlides"
    if (n > slides.length) {slideIndex = 1} // if n is greater than number of slides, set slideIndex to 1
    if (n < 1) {slideIndex = slides.length} // if n is less than 1, then set slideIndex to the number of images in the slideshow
    for (i = 0; i < slides.length; i++) { // for loop over the number of images over slideshow
        slides[i].style.display = "none"; // don't display current slide
    } // end for loop
    slides[slideIndex-1].style.display = "block"; // display slideshow image as block image
} // end function