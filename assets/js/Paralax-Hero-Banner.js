var jumboHeight = $('.jumbotron').outerHeight();


function parallax() {
    var scrolled = $(window).scrollTop();
    $('.jumbotron').css('background-position', 'center ' + -(scrolled * 0.2) + 'px');
    console.log(scrolled);
    if (scrolled < 650) {
        document.getElementById("tester").style.display = "none";
    } else {
        document.getElementById("tester").style.display = "block";
    }
    if (scrolled > 100) {
        document.getElementById("navbrand").style.width = "100px"
    } else {
        document.getElementById("navbrand").style.width = "160px"
    }
}

$(window).scroll(function(e) {

    parallax();

});