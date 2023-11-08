$(document).ready(function () {
  $(".main__collection").slick({
    prevArrow: $(".slider-button.slider-button--prev"),
    nextArrow: $(".slider-button.slider-button--next"),
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1302,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "36px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  });
});



$(document).ready(function () {
  $(".recently-viewed").slick({
    prevArrow: $(".slider-button.slider-button--previous"),
    nextArrow: $(".slider-button.slider-button--nexts"),
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1302,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "36px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  });
});

// $(document).ready(function () {
//   $(".recently-viewed-max3").slick({
//     prevArrow: $(".slider-button.slider-button--previouss"),
//     nextArrow: $(".slider-button.slider-button--nextss"),
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     dots: true,
//     responsive: [
//       {
//         breakpoint: 1302,
//         settings: {
//           slidesToShow: 3,
//         },
//       },

//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           centerPadding: "36px",
//         },
//       },
//       {
//         breakpoint: 400,
//         settings: {
//           slidesToShow: 1,
//           centerPadding: "0px",
//         },
//       },
//     ],
//   });
// });



