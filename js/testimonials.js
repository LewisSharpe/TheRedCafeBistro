// Testimonial slider function
// The function changes the testimonials in the slider container at specific intervals.
$(function() {
  $('.tslide:gt(0)').hide();
  setInterval(function() {
    $('.tslide:first').fadeOut('slow').next().fadeIn('slow').end().appendTo('.tslider');
  }, 2500)
 });