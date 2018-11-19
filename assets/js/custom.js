

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



//Rotas - links
$('#home-button').click(function () {
    window.location = "index.html";
}); 

$('#home-link').click(function () {
    window.location = "index.html";
});

$('#apresentacao-link').click(function () {
    window.location = "apresentacao-do-curso.html";
});

$('#suporte-link').click(function () {
    window.location = "suporte-ao-aluno.html";
});

$('.card-suporte').click(function () {
    alert("Abre o fórum");
});


$('#palestra-link').click(function () {
    window.location = "palestras.html";
});

$('#forum-link').click(function () {
    window.location = "forum-com-especialistas.html";
});

$('#reunioes-link').click(function () {
    window.location = "reunioes-cientificas.html";
});
$('#condulta-link').click(function () {
    window.location = "codigo-de-condulta.html";
});




$('#material-link').click(function () {
    window.location = "material-complementar.html";
});

$('#material-link').click(function () {
    window.location = "material-complementar.html";
});

$('.material-complementar').click(function () {
    window.location = "material-complementar.html";
});

$('.forum-especialistas').click(function () {
    alert("LINK EXTERNO FORUM DO CANVAS");
});

//links palestras 
$('#palestra01-link').click(function () {
    window.location = "palestra01.html";
});

//links palestras 
$('#reuniao01-link').click(function () {
    window.location = "reuniao012.html";
});

$('#material01-link').click(function () {
    window.location = "material01.html";
});


$('#material-texto-01-link').click(function () {
    window.location = "material01-texto.html";
});

$('#material-video-01-link').click(function () {
    window.location = "material01-video.html";
});

$('#material-image-01-link').click(function () {
    window.location = "material01-image.html";
});



$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});