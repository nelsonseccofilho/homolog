$(document).ready(function() {
    // $.get('next-ifoot.txt', function(data) {
    //     console.log($.parseJSON(data));
    // }); 

    $(".container").onepage_scroll({
        sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000, // AnimationTime let you define how long each section takes to animate
        pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {
            startSlider();
        }, // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {
            paginationChecker();
        }, // This option accepts a callback function. The function will be called after the page moves.

        loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true, // You can activate the keyboard controls
        responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
    });

    $("#logo").click(function() {
        $(".onepage-pagination li:first a").trigger("click");
    });
    $(".start--arrow").click(function() {
        $(".onepage-pagination li:nth-child(2) a").trigger("click");
    });    
});

function init() {
    // start up after 2sec no matter what
    window.setTimeout(function() {
        start();
    }, 2000);
}

// fade in experience
function start() {
    $('body').removeClass("loading").addClass('loaded');
}

function paginationChecker() {
    if ($('section.active').hasClass('__pagination--hidden')) {
        $('.onepage-pagination').fadeOut();
    } else {
        $('.onepage-pagination').fadeIn();
    }
}

// function startCounter() {
//    if ($('section.active .count').length) {
//         console.log('startCounter')

//         var cn = $('section.active .count').text();
        
//         $('section.active .count').each(function() {
//             $(this).prop('counter', 0).animate({
//                 counter: cn
//             }, {
//                 duration: 4000,
//                 easing: 'swing',
//                 step: function(now) {
//                     $(this).text(Math.ceil(now));
//                 }          
//             });
//         });
//     }
// }


//CHAMAR NO BEFORE
function startSlider() {
    if ($('section.page-11.active').length){
        console.log('startSlider')
        
        $(".slick--slider").slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: true,
            speed: 500,
            swipe: true
        });
    }
}

$(window).load(function() {
    // fade in page
    init();
});
