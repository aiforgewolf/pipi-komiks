/**
 * Landing Page JavaScript
 * Interaktivita pro hlavní stránku Dobrodružství Pipi
 */

// ========================================
// INICIALIZACE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 Landing page se načítá...');
    initializeLanding();
    setupScrollAnimations();
    setupEpisodeCards();
    loadProgressIndicators();
    console.log('✅ Landing page připravena!');
});

/**
 * Inicializace landing page
 */
function initializeLanding() {
    // Animace při načtení
    const header = document.querySelector('.landing-header');
    if (header) {
        header.style.animation = 'fadeIn 1s ease';
    }

    // Postupné zobrazení karet
    const cards = document.querySelectorAll('.episode-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'fadeIn 0.5s ease';
        }, index * 100);
    });
}

/**
 * Scroll animace
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.animation = 'slideUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Sledovat všechny sekce
    const sections = document.querySelectorAll('.intro-section, .features-section, .about-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        observer.observe(section);
    });
}

/**
 * Interaktivita karet epizod
 */
function setupEpisodeCards() {
    const cards = document.querySelectorAll('.episode-card:not(.coming-soon)');

    cards.forEach(card => {
        // Hover efekt - zvuk
        card.addEventListener('mouseenter', () => {
            playHoverSound();
        });

        // Kliknutí na kartu
        card.addEventListener('click', (e) => {
            // Pokud neklikli přímo na tlačítko, přesměruj
            if (!e.target.closest('.read-button')) {
                const button = card.querySelector('.read-button');
                if (button && button.href) {
                    window.location.href = button.href;
                }
            }
        });

        // Přidej cursor pointer
        card.style.cursor = 'pointer';
    });

    // Coming soon karty
    const comingSoonCards = document.querySelectorAll('.episode-card.coming-soon');
    comingSoonCards.forEach(card => {
        card.addEventListener('click', () => {
            showComingSoonMessage();
        });
        card.style.cursor = 'pointer';
    });
}

/**
 * Načtení indikátorů postupu
 */
function loadProgressIndicators() {
    // Zkontrolovat uložený postup pro epizodu 1
    try {
        const episode1Progress = localStorage.getItem('pipi-komiks-page');
        if (episode1Progress) {
            const episodeCard = document.querySelector('.episode-card:not(.coming-soon)');
            if (episodeCard) {
                // Přidat indikátor "Rozečteno"
                const badge = document.createElement('div');
                badge.className = 'episode-badge reading';
                badge.textContent = 'ROZEČTENO';
                badge.style.cssText = `
                    position: absolute;
                    top: 60px;
                    right: 15px;
                    background: #4ECDC4;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-weight: bold;
                    font-size: 0.85rem;
                    border: 3px solid #2C3E50;
                    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
                    z-index: 2;
                `;
                episodeCard.appendChild(badge);

                console.log('📖 Nalezen rozečtený komiks!');
            }
        }
    } catch (error) {
        console.warn('⚠️ Nepodařilo se načíst progres:', error);
    }
}

/**
 * Zobrazení zprávy "Už brzy"
 */
function showComingSoonMessage() {
    const message = document.createElement('div');
    message.className = 'toast-notification';
    message.innerHTML = `
        <div class="toast-content">
            <span class="toast-icon">🔜</span>
            <span class="toast-text">Tato epizoda se připravuje! Sledujte nás pro aktualizace.</span>
        </div>
    `;
    message.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #4ECDC4 0%, #45B7AA 100%);
        color: white;
        padding: 20px 30px;
        border-radius: 50px;
        border: 4px solid #2C3E50;
        box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);
        font-weight: bold;
        font-size: 1rem;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;

    document.body.appendChild(message);

    // Automaticky odstranit po 3 sekundách
    setTimeout(() => {
        message.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            message.remove();
        }, 300);
    }, 3000);

    playNotificationSound();
}

/**
 * Přehrání hover zvuku
 */
function playHoverSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 600;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
        // Tiše ignorovat chyby zvuku
    }
}

/**
 * Přehrání notifikačního zvuku
 */
function playNotificationSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(700, audioContext.currentTime + 0.1);
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
        // Tiše ignorovat chyby zvuku
    }
}

/**
 * Smooth scroll pro odkazy
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Přidání CSS animací dynamicky
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// EASTER EGG - Konami kód
// ========================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateRainbowMode();
        konamiCode = [];
    }
});

function activateRainbowMode() {
    const container = document.querySelector('.landing-page');
    if (container) {
        container.style.animation = 'rainbow 3s linear infinite';

        // Přidat CSS pro rainbow animaci
        if (!document.getElementById('rainbow-style')) {
            const rainbowStyle = document.createElement('style');
            rainbowStyle.id = 'rainbow-style';
            rainbowStyle.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(rainbowStyle);
        }

        // Zobrazit zprávu
        showComingSoonMessage();

        // Vypnout po 10 sekundách
        setTimeout(() => {
            container.style.animation = '';
        }, 10000);

        console.log('🌈 DUHOVÝ MÓD AKTIVOVÁN!');
    }
}

// ========================================
// EXPORT PRO DEBUGGING
// ========================================

window.landingDebug = {
    showComingSoon: showComingSoonMessage,
    activateRainbow: activateRainbowMode,
    clearProgress: () => {
        localStorage.removeItem('pipi-komiks-page');
        console.log('🗑️ Progres smazán');
        location.reload();
    }
};

console.log('💡 Pro debug použijte: window.landingDebug');
