$(document).ready(function() {
  var bgArray = ['bar.jpg', 'building.jpg', 'entrancefloor.jpg', 'morefood.jpg', 'frontbench.jpg', 'moreart.jpg', 'morebar.jpg', 'tortilliera.jpg'];
  var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
  var path = 'images/';
  var imageUrl = path + bg;
  $('body').css('background-image', 'url(' + imageUrl + ')');
});

