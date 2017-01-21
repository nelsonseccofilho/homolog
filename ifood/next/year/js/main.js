//variables
var loopHeader;
var loopFooter;
var ativaLoopHeader = true;
var ativaLoopFooter = true;
var passouFooter = false;
var passouFooterLoop = false;
var passouHeader = false;
var flag = 1;
var flagMomento = 1;
var controleMomentoBefore = true;
var controleMomentoAfter = true;

$(document).bind(
    'touchmove',
    function(e) {
        e.preventDefault();
    }
);

$(document).ready(function() {
    $(".container").onepage_scroll({
        sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000, // AnimationTime let you define how long each section takes to animate
        pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {
            paginationChecker();
            // ControlMomentsVerification
            if (controleMomentoBefore) {
                controleMomentoBefore = false;
                // console.log(index);

            } else {
                controleMomentoBefore = true;
                startCounter();
            }
            // ControlMomentsVerification--END

        }, // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {
            flag = index;


            if (controleMomentoAfter) {
                controleMomentoAfter = false;
                // console.log(flag);


                var countSection = $('body section').length;
                if ($("body").attr("class").search("viewing-page-" + countSection) != -1 && passouFooter == false) {



                    //IF --OLD
                    // flagMomento = flag;
                    // videoFooter.play();
                    // passouFooter = true;
                    // passouFooterLoop = true;
                    // videoFooter.addEventListener('ended', videoEndedFooter, true);
                    // console.log("controle 4 => "+passouFooterLoop);

                    flagMomento = flag;
                    console.log('2017-dentro');
                    animaYears('2017', "myImageFooter");
                    loopingFooter = setTimeout(function() {
                        console.log("ACABOU 2017");
                        animaYears('2017', "myImageFooter");
                    }, 7000)
                    passouFooter = true;
                    passouFooterLoop = true;





                } else {
                    //ELSE --OLD
                    // clearTimeout(loopFooter);
                    // passouFooterLoop = false;
                    // console.log("controle outro => "+passouFooterLoop);

                    clearTimeout(loopingFooter);
                    passouFooterLoop = false;
                }

                if ($("body").attr("class").search("viewing-page-1") != -1) {
                    flagMomento = flag;
                } else {
                    //ELSE --OLD
                    // clearTimeout(loopHeader);
                    // passouHeader = false;

                    clearTimeout(loopingHeader);
                    passouHeader = false;
                }
            } else {
                controleMomentoAfter = true;
            }
        }, // This option accepts a callback function. The function will be called after the page moves.

        loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true, // You can activate the keyboard controls
        responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
    });

    $(".onepage-pagination li a").click(function(e) {
        e.preventDefault();
    });

    $(".slick--slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        speed: 500,
        swipe: true
    });

    //triggers
    $("#logo").click(function() {
        $(".onepage-pagination li:first a").trigger("click");
    });
    $(".start--arrow").click(function() {
        $(".onepage-pagination li:nth-child(2) a").trigger("click");
    });
});


// init() --OLD
// function init() {
//     window.setTimeout(function() {
//         start();
//     }, 1000);
// }

function videoEndedHeader(event) {
    if (ativaLoopHeader == true) {
        ativaLoopHeader = false;

        if (flag == flagMomento && passouHeader == true) {
            loopHeader = setTimeout(function() {
                videoHeader.play();
            }, 4000);
            // console.log("FOI HEIN");
        } else {
            // console.log("PASSOU");
        }
    }
}

function videoEndedFooter(event) {
    if (ativaLoopFooter == true) {
        ativaLoopFooter = false;

        if (flag == flagMomento && passouFooterLoop == true) {
            loopFooter = setTimeout(function() {
                videoFooter.play();
            }, 4000);
            // console.log("FOI HEIN FOOTER");
        } else {
            // console.log("PASSOU FOOTER");
        }
    }
}

function paginationChecker() {
    if ($('section.active').hasClass('__pagination--hidden')) {
        $('.onepage-pagination').fadeOut();
    } else {
        $('.onepage-pagination').fadeIn();
    }
}

// startCounter() --OLD
// function startCounter() {
//     if ($('section.active .count').length) {
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

function startCounter() {

    // console.log($('section.active .count').length+" => "+$('section.active .count').eq(0).text());

    if ($('section.active .count').length) {


        for (var e = 0; e < $('section.active .count').length; e++) {
            console.log($('section.active .count').eq(e).text());


            var cn = $('section.active .count').eq(e).text();
            var count = cn.length;
            var velocidade = 3;
            // var tempoMomento = 4000;
            var tempoMomento = 2000;

            // velocidade = tempoMomento / count * (velocidade-(e+e));
            // velocidade = tempoMomento / count * velocidade;

            for (var i = 0; i < count; i++) {
                cn = cn.replace(".", "");
            }

            $('section.active .count').eq(e).each(function() {
                $(this).prop('counter', 0).animate({
                    counter: cn
                }, {
                    duration: tempoMomento,
                    easing: 'swing',
                    step: function(now) {
                        var momento = String(Math.round(now)).replace(/(.)(?=(\d{3})+$)/g, '$1.')
                        $(this).text(momento);
                    }
                });
            });



        }


    }
}

function init() {
    start();
    // start up after 2sec no matter what
    // window.setTimeout(function() {
    // }, 2000);
}

// start() --OLD
// function start() {
//     $('body').removeClass("loading").addClass('loaded');
// }
function start() {
    //start() --OLD
    // $('.container--loading').removeClass("loading");
    // passouHeader = true;
    // videoHeader.play();
    // videoHeader.addEventListener('ended', videoEndedHeader, true);
    // window.setTimeout(function() {
    //     $('.container--loading').hide();
    // }, 1000);

    $('.container--loading').removeClass("loading");
    window.setTimeout(function() {
        $('.container--loading').hide();
    }, 1000);

    passouHeader = true;
    animaYears('2016', "myImageHeader");
    loopingHeader = setTimeout(function() {
        // console.log("ACABOU 2016");
        animaYears('2016', "myImageHeader");
    }, 7000);
}

///////VIDEO IMAGEM

(function() {
    var lastTime = 0;
    var vendors = ["ms", "moz", "webkit", "o"];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"]
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
        var currTime = (new Date).getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
            callback(currTime + timeToCall)
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
        clearTimeout(id)
    }
})();








var loopingHeader;
var loopingFooter;


function rightNow() {
    if (window['performance'] && window['performance']['now']) {
        return window['performance']['now']();
    } else {
        return +(new Date());
    }
}


function preloadImage(year, frameNum) {
    //console.log("Preload:" + frameNum)
    var img = new Image();
    img.src = "img/years/iFood_" + year + "_000" + (frameNum >= 0 ? (frameNum < 10 ? "0" : "") + frameNum + ".png" : "00" + ".png");
}


function animaYears(year, element) {

    var fps = 30,
        currentFrame = 0,
        totalFrames = 76,
        img = document.getElementById(element),
        currentTime = rightNow(),
        looping = 0,
        loopingCount = 0,
        preloaded = 0;

    for (var i = 0; i < totalFrames; i++) {

        preloadImage(year, i)
        preloaded++

        if (preloaded == totalFrames) {

            (function aniYear(time) {
                var delta = (time - currentTime) / 1000;

                //var loopingCount = 0;

                currentFrame += (delta * fps);

                var frameNum = Math.floor(currentFrame);


                if (frameNum >= totalFrames) {
                    if (loopingCount < looping) {
                        currentFrame = frameNum = 0;
                        loopingCount++
                    } else {
                        return false;
                    }
                }

                requestAnimationFrame(aniYear);

                img.src = "img/years/iFood_" + year + "_000" + (frameNum >= 0 ? (frameNum < 10 ? "0" : "") + frameNum + ".png" : "00" + ".png");

                currentTime = time;
            })(currentTime);
        }



    }




}



///////VIDEO IMAGEM




$(window).load(function() {
    // $(".container").fadeIn(1000);
    // $("header").fadeIn(1000);
    init();
});
