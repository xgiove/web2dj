/*  ---------------------------------------------------
  Template Name: DJoz
  Description:  DJoz Music HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*--------------------------
        Event Slider
    ----------------------------*/
    // $(".event__slider").owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     items: 3,
    //     dots: false,
    //     nav: true,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     smartSpeed: 1200,
    //     autoHeight: false,
    //     autoplay: true,
    //     responsive: {
    //         992: {
    //             items: 3,
    //         },
    //         768: {
    //             items: 2,
    //         },
    //         0: {
    //             items: 1,
    //         },
    //     }
    // });

    const $carousel = $(".event__slider");

    $carousel.owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout: 5000, // 5 secondi
        autoplayHoverPause: false,
        responsive: {
            992: { items: 3 },
            768: { items: 2 },
            0: { items: 1 },
        }
    });

    // Intercetta le interazioni manuali e resetta il timer dell'autoplay
    function resetAutoplay() {
        $carousel.trigger('stop.owl.autoplay');
        $carousel.trigger('play.owl.autoplay');
    }

    // Quando clicchi le frecce
    $carousel.on('click', '.owl-prev, .owl-next', function () {
        resetAutoplay();
    });

    // Quando fai swipe (drag)
    $carousel.on('drag.owl.carousel', function () {
        resetAutoplay();
    });

    /*--------------------------
        Videos Slider
    ----------------------------*/
    $(".videos__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 4,
            },
            768: {
                items: 3,
            },
            576: {
                items: 2,
            },
            0: {
                items: 1,
            }
        }
    });

    /*------------------
        Magnific
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if (mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end


    // Use this for real timer date
    /* var timerdate = "2020/01/01"; */

    $("#countdown-time").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='countdown__item'><span>%D</span> <p>Days</p> </div>" + "<div class='countdown__item'><span>%H</span> <p>Hours</p> </div>" + "<div class='countdown__item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='countdown__item'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1').barfiller({
        barColor: "#ffffff",
    });

    $('#bar2').barfiller({
        barColor: "#ffffff",
    });

    $('#bar3').barfiller({
        barColor: "#ffffff",
    });

    /*-------------------
        Nice Scroll
    --------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#111111",
        cursorwidth: "5px",
        background: "#e1e1e1",
        cursorborder: "",
        autohidemode: false,
        horizrailenabled: false
    });

})(jQuery);


/* PaoloRos */

/*
* Javascript to show and hide cookie banner using localstorage
*/

/**
 * @description Shows the cookie banner
 */
function showCookieBanner() {
    let cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.display = "block";
}

/**
 * @description Hides the Cookie banner and saves the value to localstorage
 */
function hideCookieBanner() {
    localStorage.setItem("xgiove_cb_isCookieAccepted", "yes");

    let cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.display = "none";
}

/**
 * @description Checks the localstorage and shows Cookie banner based on it.
 */
function initializeCookieBanner() {
    let isCookieAccepted = localStorage.getItem("xgiove_cb_isCookieAccepted");
    if (isCookieAccepted === null) {
        localStorage.setItem("xgiove_cb_isCookieAccepted", "no");
        showCookieBanner();
    }
    if (isCookieAccepted === "no") {
        showCookieBanner();
    }
}

// Assigning values to window object
window.onload = initializeCookieBanner();
window.cb_hideCookieBanner = hideCookieBanner;


/* Selettore provider musicale */

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('provider-select');
    const container = document.getElementById('iframe-container');

    // Codici iframe completi per ogni provider
    const iframes = {
        spotify: `
            <iframe class="embed-provider" style="border-radius:12px"
                src="https://open.spotify.com/embed/artist/0gwlxKTRcSoc9xNEXGwECx?utm_source=generator"
                width="100%" height="380" frameborder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
        `,
        appleMusic: `
            <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/it/artist/xgiove/1433649749"></iframe>
        `,
        youtube: `
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen style="border-radius:12px"></iframe>
        `
    };

    // Funzione per aggiornare l'iframe inizialmente (al caricamento pagina)
    function updateIframe() {
        const selected = select.value;
        container.innerHTML = iframes[selected] || '';
    }

    // Aggiorna iframe al cambio selettore
    select.addEventListener('change', updateIframe);

    // Imposta iframe iniziale
    updateIframe();
});


// Inizializzazione del carosello Owl Carousel per la discografia
$(document).ready(function () {
    $(".event__slider").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: { items: 2 },
            600: { items: 3 },
            1000: { items: 4 }
        }
    });

    // Gestione del click sulla miniatura del disco
    $(".disc-carousel-thumb").on("click", function () {
        const newCover = $(this).data("cover");
        const newSpotify = $(this).data("spotify");

        // Cambio copertina con effetto dissolvenza
        $("#main-cover").fadeOut(200, function () {
            $(this).attr("src", newCover).fadeIn(200);
        });

        // Cambio iframe Spotify con effetto dissolvenza
        $("#main-iframe").fadeOut(200, function () {
            $(this).attr("src", newSpotify).fadeIn(200);
        });

        // Scroll verso l’alto al contenitore principale
        const scrollTarget = $("#active-display").offset().top - 60;
        $("html, body").animate({ scrollTop: scrollTarget }, 600);
    });

    // Attivazione degli sfondi con data-setbg
    $('.set-bg').each(function () {
        const bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
});
