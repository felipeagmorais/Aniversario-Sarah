document.addEventListener('DOMContentLoaded', function() {
    // Calculando os dias juntos
    const startDate = new Date('2025-04-26');
    const currentDate = new Date();
    const timeDiff = currentDate - startDate;
    const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('days-together').textContent = daysTogether;

    // Ativando animações ao scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('section').forEach(section => {
        section.querySelectorAll('h2, .message-card, .gallery-item, .timeline-item, .cake-placeholder, .wish-card').forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    });

    // Criando a galeria de fotos
    const galleryImages = [
        // Substitua estes caminhos por caminhos reais para suas fotos
        { path: 'images/photo1.jpg', description: 'Dia no MON' },
        { path: 'images/photo2.jpg', description: 'Passeios no Shopping' },
        { path: 'images/photo3.jpg', description: 'Correria na Rotina' },
        { path: 'images/photo4.jpg', description: 'Carnaval' },
        { path: 'images/photo5.jpg', description: 'Natal' },
        { path: 'images/photo6.jpg', description: 'Festinhas' },
        { path: 'images/photo7.jpg', description: 'Muuitos ônibus' }
    ];

    const galleryContainer = document.querySelector('.gallery');
      // Criando elementos da galeria
    galleryImages.forEach(img => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        // Usando as imagens reais em vez de placeholders
        const image = document.createElement('img');
        image.src = img.path;
        image.alt = img.description;
        image.title = img.description;
        
        // Adicionando uma camada para o texto da descrição
        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        
        const text = document.createElement('p');
        text.textContent = img.description;
        text.className = 'gallery-description';
        
        overlay.appendChild(text);
        galleryItem.appendChild(image);
        galleryItem.appendChild(overlay);
        galleryContainer.appendChild(galleryItem);
    });

    // Função para gerar cores pastéis aleatórias para os placeholders
    function getRandomPastelColor() {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 80%, 80%)`;
    }

    // Dispara confetes quando a página carrega
    launchConfetti();
});

// Função para lançar confetes
function launchConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Confetes de cores diferentes
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ['#ff85a2', '#ffc2d1', '#ff499e'],
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ['#ff85a2', '#ffc2d1', '#ff499e'],
        });
    }, 250);
}
