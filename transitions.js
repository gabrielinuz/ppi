document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const loader = document.getElementById('loader-wrapper');

    // 1. Manejo del Loader y Fade-in de Entrada
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.5s ease-in-out';
    
    // Simular un breve tiempo de carga para inicialización de recursos
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.visibility = 'hidden';
                loader.remove(); // Limpieza estricta del DOM
                body.style.opacity = '1';
            }, 500);
        } else {
            body.style.opacity = '1';
        }
    }, 300);

    // 2. Efecto de Salida (Fade-out) al navegar hacia las diapositivas
    const links = document.querySelectorAll('a.btn, button.btn:not(.btn-disabled)');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const destination = this.getAttribute('href') || this.onclick;
            
            // Ignorar enlaces externos o anclas
            if (!destination || destination.includes('#') || this.target === '_blank') return;

            e.preventDefault();
            body.style.opacity = '0';

            // Ejecutar la redirección tras completar la animación
            setTimeout(() => {
                if (typeof destination === 'string') {
                    window.location.href = destination;
                } else if (typeof this.onclick === 'function') {
                    this.onclick(); 
                }
            }, 500);
        });
    });
});