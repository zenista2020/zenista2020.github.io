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
}

$(window).scroll(function(e) {

    parallax();

});