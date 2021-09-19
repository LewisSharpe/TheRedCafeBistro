// Create the slider function
function slider() {
// create a variable
    let slides = document.querySelectorAll('#slides .slide');
// set variable to keep track of number of current slide
    let currentSlide = 0;
// creating variable to set time interval for next slide in slide iteration
    let slideInterval = setInterval(nextSlide, 3000);
// function moves to next image in slider
    function nextSlide() {
    // change the current slide class so it is not showing
    // css handles fade out transition automatically
    slides[currentSlide].className = 'slide';     
    // increment one to slide counter variable
    // % cycles back to zero when you reach the end of slide images
    // the cycle will restart with start with first slide
    currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide showing';
 }
}
// calls slider function to execute code segments within it
slider();