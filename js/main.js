// Variables
var mobileNav = $('nav'); //navigation menu variable

//mobileNav.hide();
//Show small screen navigation menu when navigation button is pressed
$('.navbar').on('click', 'button', function () {
    $('header').animate({
        top: '-=130px'
    });

    mobileNav.delay(100).animate({
        left: '+=260px'
    }, 700); //toggles the menu display
});

$('.is-open').on('click', 'button', function () {
    mobileNav.animate({
        left: '-=260px'
    }, 700); //toggles the menu display
    $('header').delay(300).animate({
        top: '+=130px'
    });
});

