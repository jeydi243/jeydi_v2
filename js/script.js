import "./cssjs.js";
import "./jquery.pagepiling.js";
import "./parallax.min.js";
import "./script-2";
import { gsap } from "gsap";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();

import LocomotiveScroll from "locomotive-scroll";
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  offset: ["30%", 0],
  // repeat: true,
  reloadOnContextChange: true,
  tablet: { smooth: false },
  smartphone: { smooth: true },
})(
  // import "./parallax.js";
  /**************************************************************
	
	Main Js Activation
	01. Preloader 
	02. Menu 
	03. Pagepiling
	04. Typed Text
	05. Parallax
	06. Carousels
	07. Ajax Forms
	__ End Js Activation

***************************************************************/
  "use strict"
);

/*-------------------------------------------------------------------------------
	  Preloader
	-------------------------------------------------------------------------------*/

$(window).on("load", function () {
  if ($(".preloader").length) {
    setTimeout(() => {
      $(".preloader").fadeOut("slow");
    }, 4000);
  }

  if ($(".a-intro").length) {
    setTimeout(() => {
      $(".a-intro").addClass("active");
    }, 4000);
  }
});

/*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/

$(".a-nav-toggle").on("click", function () {
  if ($("html").hasClass("body-menu-opened")) {
    $("html").removeClass("body-menu-opened").addClass("body-menu-close");
  } else {
    $("html").addClass("body-menu-opened").removeClass("body-menu-close");
  }
});

// Elements Animation
if ($(".wow").length) {
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
  });
  wow.init();
}

/*-------------------------------------------------------------------------------
	  Pagepiling
	-------------------------------------------------------------------------------*/
gsap.from(".char", {
  duration: 2,
  opacity: 0,
  stagger: 0.02,
  y: 30,
  skewX: 10,
  repeat: false,
  ease: "power1.inOut",
});
if ($(".a-pagepiling").length) {
  $(".a-pagepiling").pagepiling({
    scrollingSpeed: 250,
    menu: "#menu, #menuMain",
    anchors: ["About", "Services", "Skills", "Resume", "Portfolio", "Awards", "Testimonials", "Clients", "Contact"],
    loopTop: false,
    loopBottom: false,
    easing: "swing",
    navigation: {
      position: "left",
      tooltips: [
        "Banner Section",
        "Skill Section",
        "Apps Section",
        "Profile Section",
        "Web Section",
        "Clients Section",
        "Clients Section",
        "News Section",
        "Contact Section",
      ],
    },
    afterRender: function () {
      $("#pp-nav").addClass("custom");
      gsap.from(".char", {
        duration: 2,
        opacity: 0,
        stagger: 0.02,
        y: 30,
        skewX: 10,
        repeat: false,
        ease: "power1.inOut",
      });
    },
    afterLoad: function (anchorLink, index) {
      if (index > 1) {
        $("#pp-nav").removeClass("custom");
      } else {
        $("#pp-nav").addClass("custom");
      }
      gsap.from(".char", {
        duration: 3,
        opacity: 0,
        stagger: 0.02,
        y: 30,
        skewX: 10,
        repeat: false,
        ease: "power1.inOut",
      });
    },
    onLeave: function () {
      $(".a-progressbar .progress-bar").each(function () {
        if ($(".slide-skills").hasClass("active")) {
          $(this).width($(this).attr("aria-valuenow") + "%");
        } else {
          $(this).width("0");
        }
      });
    },
  });
}

//Parallax Scene for Icons
if ($(".parallax-scene-1").length) {
  var scene = $(".parallax-scene-1").get(0);
  var parallaxInstance = new Parallax(scene);
}
if ($(".parallax-scene-2").length) {
  var scene = $(".parallax-scene-2").get(0);
  var parallaxInstance = new Parallax(scene);
}
if ($(".parallax-scene-3").length) {
  var scene = $(".parallax-scene-3").get(0);
  var parallaxInstance = new Parallax(scene);
}

if ($(".paroller").length) {
  $(".paroller").paroller({
    factor: 0.2, // multiplier for scrolling speed and offset, +- values for direction control
    factorLg: 0.4, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control
    type: "foreground", // background, foreground
    direction: "horizontal", // vertical, horizontal
  });
}

//Main Slider Carousel
if ($(".banner-carousel").length) {
  $(".banner-carousel").owlCarousel({
    animateOut: "fadeOut",
    animateIn: "slideInUp",
    loop: true,
    margin: 0,
    nav: true,
    autoHeight: true,
    autoplayHoverPause: true, // Stops autoplay
    smartSpeed: 500,
    autoplay: 6000,
    navText: ['<span class="flaticon-back-1"></span>', '<span class="flaticon-arrow-pointing-to-right"></span>'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1024: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });
}

// Single Item Carousel
if ($(".single-item-carousel").length) {
  $(".single-item-carousel").owlCarousel({
    //animateOut: 'fadeOut',
    //animateIn: 'fadeIn',
    loop: true,
    margin: 0,
    nav: true,
    autoHeight: true,
    autoplayHoverPause: true, // Stops autoplay
    smartSpeed: 500,
    autoplay: 6000,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1024: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });
}

// Clients Carousel
if ($(".clients-carousel").length) {
  $(".clients-carousel").owlCarousel({
    //animateOut: 'fadeOut',
    //animateIn: 'fadeIn',
    loop: true,
    margin: 30,
    nav: true,
    autoHeight: true,
    autoplayHoverPause: true, // Stops autoplay
    smartSpeed: 500,
    autoplay: 6000,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
}

//Tabs Box
if ($(".tabs-box").length) {
  $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
    e.preventDefault();
    var target = $($(this).attr("data-tab"));

    if ($(target).is(":visible")) {
      return false;
    } else {
      target.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn");
      $(this).addClass("active-btn");
      target.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0);
      target.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab");
      $(target).fadeIn(300);
      $(target).addClass("active-tab");
    }
  });
}

//Typeit Text On Main Page
if ($(".variable-text").length) {
  $(".variable-text").typeIt({
    strings: ["I am Jan Jeydi Developer & designer"],
    speed: 150,
    breakLines: true,
    loop: false,
    autoStart: true,
  });
}

//Contact Form Validation
if ($("#contact-form").length) {
  $("#contact-form").validate({
    rules: {
      username: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
      },
      services: {
        required: true,
      },
    },
  });
}

//Custom Seclect Box
if ($(".custom-select-box").length) {
  $(".custom-select-box").selectmenu().selectmenu("menuWidget").addClass("overflow");
}

//LightBox / Fancybox
if ($(".lightbox-image").length) {
  $(".lightbox-image").fancybox({
    openEffect: "fade",
    closeEffect: "fade",
    helpers: {
      media: {},
    },
  });
}

/*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/

if ($("#a-parallax").length) {
  var scene = document.getElementById("a-parallax");
  var parallax = new Parallax(scene);
}

/*-------------------------------------------------------------------------------
	  Carousels
	-------------------------------------------------------------------------------*/

if ($(".a-portfolio-carousel").length) {
  var owl = $(".a-portfolio-carousel");
  owl.owlCarousel({
    items: 3,
    smartSpeed: 750,
    margin: 30,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    dotData: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });
}

if ($(".a-testimonial-carousel").length) {
  var owl = $(".a-testimonial-carousel");
  owl.owlCarousel({
    items: 1,
    smartSpeed: 750,
    margin: 30,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
  });
}

/*-------------------------------------------------------------------------------
	  Ajax Forms
	-------------------------------------------------------------------------------*/

if ($(".a-form").length) {
  $(".a-form").each(function () {
    $(this).validate({
      errorClass: "error",
      submitHandler: function (form) {
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(form).serialize(),
          success: function () {
            $(".form-group-message").show();
            $("#error").hide();
            $("#success").show();
          },
          error: function () {
            $(".form-group-message").show();
            $("#success").hide();
            $("#error").show();
          },
        });
      },
    });
  });
}
