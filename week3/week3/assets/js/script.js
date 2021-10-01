$(document).ready(function() {
    $('.site-nav li').on("click", function () {
        $('.site-nav li a').removeClass('active');
        $(this).find('a').addClass('active');
    });
});