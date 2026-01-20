const btnMobile = document.getElementById('btn-mobile');
const navList = document.querySelector('.header-right');

function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault(); // Melhora o toque no mobile
        navList.classList.toggle('active');
        
        // Acessibilidade: troca o ícone se quiser (opcional)
        const active = navList.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);