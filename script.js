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
// ========================================
// 3. MENU MOBILE
// ========================================

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {

    menuToggle.addEventListener('click', function () {

        const menuAberto = nav.classList.toggle('menu-open');

        menuToggle.setAttribute(
            'aria-expanded',
            menuAberto
        );

        menuToggle.setAttribute(
            'aria-label',
            menuAberto ? 'Fechar menu' : 'Abrir menu'
        );

        menuToggle.textContent = menuAberto ? '✕' : '☰';

    });

    nav.querySelectorAll('a').forEach(function (link) {

        link.addEventListener('click', function () {

            nav.classList.remove('menu-open');

            menuToggle.setAttribute(
                'aria-expanded',
                'false'
            );

            menuToggle.setAttribute(
                'aria-label',
                'Abrir menu'
            );

            menuToggle.textContent = '☰';

        });

    });

}
