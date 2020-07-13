/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function ($) {
  var $window = $(window),
    $banner = $("#banner"),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    default: ["1681px", null],
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["361px", "480px"],
    xxsmall: [null, "360px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Menu.
  $("#menu").appendTo($body).panel({
    target: $body,
    visibleClass: "is-menu-visible",
    delay: 500,
    hideOnClick: true,
    hideOnSwipe: true,
    resetScroll: true,
    resetForms: true,
    side: "right",
  });

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#menu"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - $("#header").height() + 1,
            },
            1000
          );
        }
      }
    });
})(jQuery);

var iframe = document.getElementById("requestform");

// Adjusting the iframe height onload event
iframe.onload = function () {
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
};

$(document).scroll(function () {
  if ($(document).scrollTop() > 0) {
    // user scrolled 50 pixels or more;
    // do stuff
    $("#header").addClass("nottop");
  } else {
    $("#header").removeClass("nottop");
  }
});

if ($(document).scrollTop() > 0) {
  // user scrolled 50 pixels or more;
  // do stuff
  $("#header").addClass("nottop");
} else {
  $("#header").removeClass("nottop");
}
