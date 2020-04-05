// Header buttons

$('body').on('click', '.header__burger-link', function() {
    $('.mobile-menu').addClass('mobile-menu--open');
});

$('body').on('click', '.mobile-menu__close', function() {
    $('.mobile-menu').removeClass('mobile-menu--open');
});