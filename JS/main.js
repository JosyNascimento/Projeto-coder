window.addEventListener('scroll', function() {
    var menuMagico = document.getElementById('menuMagico');
    var magia = window.scrollY > 50 ? "blue" : "transparent"; // Azul se rolar mais de 50px

    menuMagico.style.backgroundColor = magia;
});