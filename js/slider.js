$(document).ready(function(){
    $(".multiple-items").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/arrowLeft.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./images/arrowRight.png'>"
    });
});