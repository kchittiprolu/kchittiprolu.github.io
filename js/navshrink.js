$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

// $("#projects").click(function() {
//     $('html,body').animate({
//         scrollTop: $("#Projects").offset().top
//     }, 1000);
// });