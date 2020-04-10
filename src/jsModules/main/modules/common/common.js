// Header buttons

$('body').on('click', '.header__burger-link', function() {
    $('.mobile-menu').addClass('mobile-menu--open');
});

$('body').on('click', '.mobile-menu__close', function() {
    $('.mobile-menu').removeClass('mobile-menu--open');
});

// LK tabs

$('body').on('click', '.lk__tab-item', function(e) {
    e.preventDefault();
    $('.lk__tab-item').removeClass('lk__tab-item--active');
    $(this).addClass('lk__tab-item--active');
    let tabName = $(this).attr('data-tab');
    $('.law__questions').removeClass('law__questions--active');
    $('.law__questions[data-tab=' + tabName + ']').addClass('law__questions--active');
});

// Pagination

$('body').on('click', '.pagination__page', function(e) {
    e.preventDefault();
    $('.pagination__page').removeClass('pagination__item--current');
    $(this).addClass('pagination__item--current');
});

// LK lawyer left sidebar

$('body').on('click', '.lk-lawyer__link', function(e) {
    e.preventDefault();
    $('.lk-lawyer__link').removeClass('lk-lawyer__link--active');
    $(this).addClass('lk-lawyer__link--active');
});

// Top menu dropdown

$('body').on('click', '.header__nav-toggler', function() {
    if ($(this).closest('.header__nav-item').hasClass('header__nav-item--open')) {
        $('.header__nav-toggler').removeClass('header__nav-toggler--open');
        $('.header__nav-toggler').closest('.header__nav-item').removeClass('header__nav-item--open'); 
    } else {
        $('.header__nav-toggler').removeClass('header__nav-toggler--open');
        $(this).addClass('header__nav-toggler--open');
        $('.header__nav-toggler').closest('.header__nav-item').removeClass('header__nav-item--open');
        $(this).closest('.header__nav-item').addClass('header__nav-item--open');
    }
})