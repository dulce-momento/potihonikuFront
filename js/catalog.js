function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

var ul = document.getElementById('tags');
ul.onclick = function(event) {
    var target = getEventTarget(event);
    if(target.classList.contains('active')){
        target.classList.remove("active");
    }
    else{
        $(target).addClass('active');
    }
};