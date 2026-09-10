// ========================================
// RESTAURANTE DA FAZENDA
// JavaScript principal do site
// ========================================


// ----------------------------------------
// 1. ROLAGEM SUAVE DOS LINKS INTERNOS
// ----------------------------------------

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener('click', function (event) {

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            event.preventDefault();

            destino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

    });

});


// ----------------------------------------
// 2. AVISO NO CONSOLE
// ----------------------------------------

console.log('Restaurante da Fazenda - site carregado com sucesso.');
