document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const currentPath = window.location.pathname;
    const slideMatch = currentPath.match(/slide(\d+)/);
    const currentId = slideMatch ? parseInt(slideMatch[1]) : 1;

    // Configuración para 12 diapositivas
    const totalSlides = 12; 

    const navContainer = document.createElement('nav');
    navContainer.className = 'nav-controls';

    const btnHome = document.createElement('a');
    btnHome.textContent = '🏠 Inicio';
    btnHome.href = '../index.html';
    
    if (currentId === 1 || currentId === totalSlides) {
        btnHome.className = 'btn-home'; 
        navContainer.appendChild(btnHome);
    } else {
        btnHome.className = 'btn-home-top';
        body.appendChild(btnHome);
    }

    if (currentId > 1) {
        const btnPrev = document.createElement('button');
        btnPrev.textContent = '← Anterior';
        btnPrev.onclick = () => window.location.href = `slide${String(currentId - 1).padStart(2, '0')}.html`;
        navContainer.appendChild(btnPrev);
    }

    if (currentId < totalSlides) {
        const btnNext = document.createElement('button');
        btnNext.textContent = 'Siguiente →';
        btnNext.onclick = () => window.location.href = `slide${String(currentId + 1).padStart(2, '0')}.html`;
        navContainer.appendChild(btnNext);
    }

    body.appendChild(navContainer);

    // Animación de entrada
    const mainContent = document.querySelector('section');
    if (mainContent) mainContent.classList.add('fade-in');
});