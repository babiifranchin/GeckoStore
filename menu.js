window.addEventListener("load", function() {
    var nav = document.querySelector("#menu nav:last-child");
    nav.addEventListener("click", function(event) {
        if(!event.target.matches("a")) {
           document.querySelector("#menu nav:last-child ul").classList.toggle("visible");
        }
    }, false);
}, false);