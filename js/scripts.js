$(document).ready(function(){
  if (window.devicePixelRatio > 1) {
    var lowresImages = $('img.content-img');

    lowresImages.each(function(i) {
      var lowres = $(this).attr('src');
      var highres = lowres.replace(".", "@2x.");
      $(this).attr('src', highres);
    });
  }
});