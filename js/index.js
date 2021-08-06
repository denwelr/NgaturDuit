
$(document).ready(function () {
    $('.answer').click(function () {
        $(this).toggleClass('answer_open');
        $(this).find('.answer__desc').slideToggle();
    });

    // Slick Slider

    $('.reviews__slides').slick({
        infinite: true,
        arrows: true,
        prevArrow: $(".reviews__arrow_prev"),
        nextArrow: $(".reviews__arrow_next"),

        responsive: [
            {
              breakpoint: 655,
              settings: {
                arrows: false
              }
            }
        ]
    });
});