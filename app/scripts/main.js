console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

// Google Maps
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 51.713113, lng: -1.009161};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
      	zoom: 16, center: uluru
      }
   );
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
