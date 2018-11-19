// Material Select Initialization
$(document).ready(function() {
    $('.mdb-select').materialSelect();
});

function menuToggle() {
    
    var element = document.getElementById("mySidenav");
    element.classList.toggle("toggle-menu");

    var element2 = document.getElementById("menu-button");
    element2.classList.toggle("toggle-menu-btn");

    var element3 = document.getElementById("lista-menu");
    element3.classList.toggle("block");

    document.getElementById("link-block").addEventListener("click", function(event){
        event.preventDefault()
    });

    // Bloqueia a interação de links desativados 
    document.getElementById("disable-link").addEventListener("click", function(event){
        event.preventDefault()
    });
    
}


