// console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

jQuery(document).ready(function($) {
    // fullpage.js initialise
    $('#fullpage').fullpage({
        licenseKey: '5E154A8E-77574575-843193BC-36825F00',
        anchors: ['Welcome', 'About', 'Recent', 'Previous', 'Contact'],
        sectionsColor: ['transparent', '#ffca3a', '#f15156', '#1982c4', '#6a4c93'],
        verticalCentered: true,
        css3:false,
        continuousVertical: false,
        slidesNavigation: true,
        touchSensitivity: 50,
        responsiveWidth: 767
    });

    $(document).on('click', '.enlarge', function(){
        $.fn.fullpage.setAllowScrolling(false);
    });

    $(document).on('click', '.turnScrollOn', function(){
        $.fn.fullpage.setAllowScrolling(true);
    });

    // ekko lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            alwaysShowClose: true,
        });
    });
});

    // Initialize and add the map
    function initMap() {
        // The location of Uluru
        var uluru = {lat: 51.713113, lng: -1.009161};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {
              zoom: 11,
              center: uluru
            }
        );
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({
            position: uluru, map: map
        });
    }


