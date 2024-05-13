var height = window.innerHeight;
var width = window.innerWidth;
console.log(width);
var heightFirst = document.getElementsByClassName('navbar-navbar')[0].offsetHeight;
var lastHeight = height-heightFirst;
document.getElementById('first_block').setAttribute("style","height:"+lastHeight+"px;");



var widthRight = document.getElementById('first-right').offsetWidth;
var widthFirst = document.getElementById('first_block').offsetWidth;
var widthLeft = widthFirst- widthRight;
document.getElementById('first-left').setAttribute("style","width:"+widthLeft+"px;");

var dulcheSize = 0.2 * lastHeight;
document.getElementById('dulcheHighTop1').setAttribute("style","font-size:"+dulcheSize+"px;");
document.getElementById('dulcheHighTop2').setAttribute("style","font-size:"+dulcheSize+"px;");

dulcheSize = 0.07 * lastHeight;
document.getElementsByClassName('title-center')[0].setAttribute("style","margin-top:"+dulcheSize+"px;");

dulcheSize = 0.07 * lastHeight;
document.getElementsByClassName('title-bottom')[0].setAttribute("style","margin-top:"+dulcheSize+"px;");

var blockWidth = width * 0.9;
var block2Height = document.getElementById('second_block').offsetHeight;
var factWidth1 = 0.36 * blockWidth;
var factHeight1 = 0.58 * block2Height
var factWidth2 = 0.25 * blockWidth;
var factHeight2 = 0.52 * block2Height
document.getElementById('fact2').setAttribute("style","width:"+factWidth2+"px; height: " +factHeight2 +"px;top: 25%;");
document.getElementById('fact1').setAttribute("style","width:"+factWidth1+"px; height: " +factHeight1 +"px;");
document.getElementById('fact3').setAttribute("style","width:"+factWidth1+"px; height: " +factHeight1 +"px;");
