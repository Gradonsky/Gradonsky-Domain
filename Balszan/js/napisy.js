function preLoader(t) {
    for (
        var a = [],
            e = [], n = 0; n < a.length; n++) !
        function(t, a) {
            var e = new Image;
            e.onload = function() {
                a.resolve()
            }, e.src = t
        }
        (a[n], e[n] = $.Deferred());
    $.when.apply($, e).done(function() {
        setTimeout(function() {
            $(".nowebkitbrowser").length ||
                $(window).width() < 700 ?
                $("body").addClass("balszan-text") : startupSequence()
        }, preloaderTimeout)
    })
}




function startupSequence(t) {
    $("body").addClass("start-up-seq"),
        introinterval = 8000,
        stickmanmovement = 3000,
        setTimeout(function() {-
            $(".intro-sequence p:nth-child(1), .intro-sequence").addClass("active"),
            $(".arm-right").addClass("winken"),
                setTimeout(function() {
                    0 == skipped && $("#r").addClass("intro-angefangen")
                }, 500),

                setTimeout(function() {
                    0 == skipped && (
                                  $(".arm-right").removeClass("winken"),
                                  $(".arm-left").addClass("arm-left-animation"),
                                  $(".arm-right").addClass("arm-right-animation"),
                                  $(".leg-left").addClass("leg-left-animation"),
                                  $(".leg-right").addClass("leg-right-animation"),
                                  $(".stick").addClass("stick-move-animation")),

                setTimeout(function() {
                    0 == skipped && ($(".intro-sequence p.active").removeClass("active"),
                                  $(".intro-sequence p:nth-child(2)").addClass("active")),

                        setTimeout(function() {
                            0 == skipped && ($(".intro-sequence p.active").removeClass("active"),
                                    $(".intro-sequence p:nth-child(3)").addClass("active")),

                                setTimeout(function() {
                                    0 == skipped && ($(".intro-sequence p.active").removeClass("active"),
                                            $(".intro-sequence p:nth-child(4)").addClass("active"),
                                            $("#r").removeClass("vaquita-shards")),

                                        setTimeout(function() {
                                            0 == skipped && ($(".intro-content p.active").removeClass("active"),
                                                    $(".intro-sequence p:nth-child(4)").removeClass("active")),

                                                setTimeout(function() {}, introinterval)
                                        }, introinterval)
                                }, 4e3)
                        }, introinterval)
                }, introinterval)
              }, stickmanmovement)
        }, 500)
/*
        setTimeout(function() {
            0 == skipped && $("body").addClass("balszan-text")
        }, 15500) */
}

/*

$(".intro-sequence p:nth-child(5)").addClass("active").addClass("textured-type")

*/

var preloaderTimeout = 2200;
preLoader();
var app, animalanimationstate = 0,
    currentChartNumber = 0,
    browservar = 0,
    slideshowvar = 0,
    finishedAnimals = 29;
newAnimal = 0;
var prevAnimal = 0,
    skipped = 0,
    forcelinesshift = 50,
    resizingPublicVariable = 1;
