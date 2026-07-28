$(document).ready(function () {
  $(".ct_menu_bar").click(function () {
    $(".ct_navbar").addClass("ct_show");
  });
  $(".ct_close_menu").click(function () {
    $(".ct_navbar").removeClass("ct_show");
  });
  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".ct_price-input input"),
    range = document.querySelector(".ct_range_slider1 .ct_range_progress");
  let priceGap = 1000;
  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });
  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });

  $(".ct_custom_price_select_dropdown").click(function (e) {
    e.stopPropagation(); // Prevent event from bubbling to document

    // Close all dropdowns except the clicked one
    $(".ct_custom_price_select_dropdown").not(this).removeClass("active");
    $(".ct_custom_drop_mega")
      .not($(this).next(".ct_custom_drop_mega"))
      .removeClass("active");

    // Toggle the clicked dropdown
    $(this).toggleClass("active");
    $(this).next(".ct_custom_drop_mega").toggleClass("active");
  });
});
$(window).on("load", function () {
  $(".ct_loader_main").fadeOut();
});

$(document).ready(function () {
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;

  setProgressBar(current);

  $(".ct_form_next").click(function () {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#ct_form_progressbar li")
      .eq($("fieldset").index(next_fs))
      .addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          next_fs.css({ opacity: opacity });
        },
        duration: 500,
      },
    );
    setProgressBar(++current);
  });

  $(".previous").click(function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#ct_form_progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          previous_fs.css({ opacity: opacity });
        },
        duration: 500,
      },
    );
    setProgressBar(--current);
  });

  function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
  }

  $(".submit").click(function () {
    return false;
  });

  $(".ct_apply_filter_btn").click(function () {
    $(".ct_mobile_filter_category_content").addClass("active");
  });
  $(".ct_category_close_btn").click(function () {
    $(".ct_mobile_filter_category_content").removeClass("active");
  });
});

flatpickr("#appointmentCalendar", {
  inline: true,

  mode: "multiple",

  minDate: "today",

  appendTo: document.getElementById("calendarWrapper"),

  dateFormat: "Y-m-d",
});

new Swiper(".ct_review_slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".ct_review_next",
    prevEl: ".ct_review_prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".ct_product_gallary_slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  dots: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".ct_product_gallary_slider .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".ct_product_gallary_slider .swiper-button-next",
    prevEl: ".ct_product_gallary_slider .swiper-button-prev",
  },
});



