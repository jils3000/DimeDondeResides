var sync_center = true;
var a = 0;
var jsons = [
    // esperanza de vida al nacer por distritos
    {viz: 'https://dimedonderesides.cartodb.com/api/v2/viz/7ed77644-9a6d-11e5-bbf8-0ecfd53eb7d3/viz.json'},
    // esperanza de vida al nacer por distritos. Mujeres
    {viz: 'https://dimedonderesides.cartodb.com/api/v2/viz/7048b6f0-9a78-11e5-97fb-0ecfd53eb7d3/viz.json'},
    // esperanza de vida al nacer por distritos. Hombres
    {viz: 'https://dimedonderesides.cartodb.com/api/v2/viz/f9c298ba-9a78-11e5-b5fb-0e787de82d45/viz.json'},
     // Tasa de paro por distritos
    {viz: 'https://dimedonderesides.cartodb.com/api/v2/viz/da903ee2-9f5b-11e5-b5b6-0e31c9be1b51/viz.json'},
	// Tasa de paro por distritos. Mujeres
    {viz: 'https://dimedonderesides.cartodb.com/api/v2/viz/e7efaab0-9f5f-11e5-a024-0e674067d321/viz.json'},
	// Tasa de paro por distritos. Hombres
    {viz: 'https://dimedonderesides.cartodb.com/api/v2/viz/3eccb5e8-9f61-11e5-b570-0e3ff518bd15/viz.json'},
	// tasa de paro por barrios
    {viz: 'https://dimedonderesides.cartodb.com/api/v2/viz/e664e302-9683-11e5-923a-0e3ff518bd15/viz.json'},
	
];
var map;
var center = {lat: 40.48, lng: -3.68};
var center2 = [40.48, -3.68];
var zoom = 11;
var zoom2 = 11;

function loadMaps(a){
  if(map){center = map.getCenter(); zoom = map.getZoom()}
  $('#map').empty();
  cartodb.createVis('map', jsons[a].viz,{
    center_lat: center.lat,
    center_lon: center.lng,
    zoom: zoom,
    shareable:false,
    search:false,
    zoomControl:true,
    loaderControl: true
  }).done(function(vis,layers){
    map = vis.getNativeMap();
  });
}

function main() {
  // Put the thumbnails
  cartodb.Image(jsons[0].viz)
    .center(center2)
    .zoom(zoom2)
    .getUrl(function(err, url) {
      var img = new Image();
      $('#map0').css('background-image', 'url(' + url + ')');
    });
  cartodb.Image(jsons[1].viz)
    .center(center2)
    .zoom(zoom2)
    .getUrl(function(err, url) {
      var img = new Image();
      $('#map1').css('background-image', 'url(' + url + ')');
    });
  cartodb.Image(jsons[2].viz)
    .center(center2)
    .zoom(zoom2)
    .getUrl(function(err, url) {
      var img = new Image();
      $('#map2').css('background-image', 'url(' + url + ')');
    });
  cartodb.Image(jsons[3].viz)
    .center(center2)
    .zoom(zoom2)
    .getUrl(function(err, url) {
      var img = new Image();
      $('#map3').css('background-image', 'url(' + url + ')');
    });
  cartodb.Image(jsons[4].viz)
    .center(center2)
    .zoom(zoom2)
    .getUrl(function(err, url) {
      var img = new Image();
      $('#map4').css('background-image', 'url(' + url + ')');
    });
  cartodb.Image(jsons[5].viz)
    .center(center2)
    .zoom(zoom2)
    .getUrl(function(err, url) {
      var img = new Image();
      $('#map5').css('background-image', 'url(' + url + ')');
    });
  cartodb.Image(jsons[6].viz)
    .center(center2)
    .zoom(zoom2)
    .getUrl(function(err, url) {
      var img = new Image();
      $('#map6').css('background-image', 'url(' + url + ')');
    });

  //loadMaps events
  $('#map0').click(function(){
    loadMaps(0);
  });
  $('#map1').click(function(){
    loadMaps(1);
  });
  $('#map2').click(function(){
    loadMaps(2);
  });
  $('#map3').click(function(){
    loadMaps(3);
  });
  $('#map4').click(function(){
    loadMaps(4);
  });
  $('#map5').click(function(){
    loadMaps(5);
  });
  $('#map6').click(function(){
    loadMaps(6);
  });

  // Click on first button
  $('#map0').click();
}

$('.Thumbnails > li').click(function() {
  $('.Thumbnails > li').removeClass('selected');
  $(this).addClass('selected');
});

window.onload = main;