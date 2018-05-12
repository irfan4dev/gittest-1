$(document).ready(function(){

    ////////////////////Button For Downward Scrolling////////////////////
    $("#go-down").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    ////////////////////Button For Upward Scrolling////////////////////
    $("#go-to-top").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    ////////////////////Hero Section SVG Animation////////////////////
    var white_box = document.querySelector("#white_box"),
        path = MorphSVGPlugin.pathDataToBezier("#transparent_path",{align:white_box});

    var tl2 = new TimelineMax({paused:true});
    tl2.set(white_box,{xPercent:-50,yPercent:-50})
        .to(white_box, 5, {bezier:{values:path, type:"cubic"}, ease:Linear.easeNone});

    //Use waypoints plugin to run the animtion when svg comes into viewport
    var waypoint = new Waypoint({
        element: document.querySelector("#hero-svg"),
        handler: function() {
            tl2.play();
        },
        offset: 300
    });

    ////////////////////Vision Section SVG Animation////////////////////
    var dollar = document.querySelector("#dollar"),
        circuit = document.querySelector("#circuit"),
        stars = document.querySelector("#stars"),
        travelDot = document.querySelector("#travel-dot");

    var tl1 = new TimelineMax({paused:true});
    tl1.set([dollar,circuit,stars],{transformOrigin:"center center"})
    .to(travelDot,0.5,{x:1330})
    .to(travelDot,1,{y:4840})
    .to(dollar,0.5,{scale:0.9,y:510},"-=0.65")
    .to(circuit,0.5,{scale:0.9},"-=0.65")
    .to(stars,0.5,{scale:0.9,y:-550},"-=0.65")
    .to(travelDot,0.5,{x:2660});

    //Use waypoints plugin to run the animtion when svg comes into viewport
    var waypoint2 = new Waypoint({
        element: document.querySelector("#vision-svg"),
        handler: function() {
            tl1.play();
        },
        offset: 300
    });
});
