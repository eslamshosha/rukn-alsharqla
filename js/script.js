$(window).load(function () {
  $(".preloader").fadeOut();
  // $("body").removeClass("overflow");
});

$(document).ready(function () {
  new WOW().init();
  $(".fixed-search").click(function (e) {
    e.preventDefault();
    $(".overlay-box").fadeToggle(300);
    $(".search-section").toggleClass("search-open");
    $("body").toggleClass("overflow");
  });
  $(".close-search").click(function (e) {
    e.preventDefault();
    $(".overlay-box").fadeToggle(300);
    $(".search-section").toggleClass("search-open");
    $("body").toggleClass("overflow");
  });

  //phone size menu onclick
  $("#menu-id").click(function (e) {
    e.preventDefault();
    $(".navgition").toggleClass("reset-left");
    $("body").toggleClass("overflow");
    $(".menu-bars").toggleClass("open-bars");
  });
  $(".nav-head .close-btn").click(function () {
    $(".navgition").removeClass("reset-left");
    $(".menu-bars .bars").toggleClass("open-bars");
    $("body").removeClass("overflow");
  });
  //fixed nav
  $stickyNav = $("header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav");
    } else {
      $stickyNav.removeClass("fixed-nav");
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav");
    }
  });
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyNav.addClass("fixed-header");
    } else {
      $stickyNav.removeClass("fixed-header");
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-header");
    }
  });
  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
  });
  ///////// ** product slider** /////////
  var specialsO = new Swiper(".product-one .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".product-one .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-one .swiper-btn-next",
      prevEl: ".product-one .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  ///////// ** product slider** /////////
  var specials1 = new Swiper(".product-two .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".product-two .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-two .swiper-btn-next",
      prevEl: ".product-two .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
});
