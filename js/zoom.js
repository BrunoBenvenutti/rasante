// ZOOM 05
$('#zoom_05').elevateZoom({
  zoomType: "lens",
  lensShape: "round",
  lensSize: 200

});
// END ZOOM 5

// ZOOM 03
//initiate the plugin and pass the id of the div containing gallery images
$("#zoom_03").elevateZoom({
  constrainType: "height",
  constrainSize: 274,
  zoomType: "lens",
  containLensZoom: true,
  gallery: 'gallery_01',
  cursor: 'pointer',
  galleryActiveClass: "active",
  responsive: true
});

//pass the images to Fancybox
$("#zoom_03").bind("click", function (e) {
  var ez = $('#zoom_03').data('elevateZoom');
  $.fancybox(ez.getGalleryList());
  return false;
});
// END ZOOM 03

// ZOOM 09
$("#zoom_09").elevateZoom({
  gallery: "gallery_09",
  galleryActiveClass: "active",
  zoomType: "inner",
  responsive: true,
  containLensZoom: true,
  cursor: "crosshair"  
});

$("#troca").change(function (e) {
  var currentValue = $("#troca").val();
  if (currentValue == 1) {
    smallImage = 'assets/img/iate-azul-sm-par.jpg';
    largeImage = 'assets/img/iate-azul-lg-par.jpg';
  }
  if (currentValue == 2) {
    smallImage = 'assets/img/iate-rosa-sm-par.jpg';
    largeImage = 'assets/img/iate-rosa-lg-par.jpg';
  }



  // Example of using Active Gallery
  $('gallery_09 a').removeClass('active').eq(currentValue = 1).addClass('active');



  var ez = $('#zoom_09').data('elevateZoom');

  ez.swaptheimage(smallImage, largeImage);

});
// END ZOOM 09