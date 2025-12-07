/**
 * Interaktivní komiks - Pipi a záhada zmizelého kufru
 * JavaScript pro navigaci, animace a interaktivitu
 */

// ========================================
// GLOBÁLNÍ PROMĚNNÉ
// ========================================

let currentPage = 1;
let totalPages = 0;
let touchStartX = 0;
let touchEndX = 0;

// DOM elementy
const comicPages = document.getElementById('comicPages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const currentPageSpan = document.getElementById('currentPage');
const totalPagesSpan = document.getElementById('totalPages');
const pageDots = document.getElementById('pageDots');

// ========================================
// INICIALIZACE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 Komiks se načítá...');
    initializeComic();
    setupEventListeners();
    loadSavedProgress();
    playWelcomeAnimation();
    console.log('✅ Komiks načten!');
});

/**
 * Inicializace komiksu
 */
function initializeComic() {
    // Zjistit počet stránek
    const pages = document.querySelectorAll('.page');
    totalPages = pages.length;
    totalPagesSpan.textContent = totalPages;

    // Vytvořit tečky pro navigaci
    createPageDots();

    // Nastavit první stránku
    showPage(1);

    console.log(`📖 Komiks má ${totalPages} stránek`);
}

/**
 * Vytvoření navigačních teček
 */
function createPageDots() {
    pageDots.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = 'page-dot';
        dot.setAttribute('data-page', i);
        dot.setAttribute('title', `Stránka ${i}`);
        dot.setAttribute('aria-label', `Přejít na stránku ${i}`);

        dot.addEventListener('click', () => {
            goToPage(i);
            playClickSound();
        });

        pageDots.appendChild(dot);
    }
}

/**
 * Nastavení event listenerů
 */
function setupEventListeners() {
    // Tlačítka navigace
    prevBtn.addEventListener('click', () => {
        previousPage();
        playClickSound();
    });

    nextBtn.addEventListener('click', () => {
        nextPage();
        playClickSound();
    });

    // Klávesnice
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            previousPage();
            playClickSound();
        } else if (e.key === 'ArrowRight') {
            nextPage();
            playClickSound();
        } else if (e.key === 'Home') {
            goToPage(1);
            playClickSound();
        } else if (e.key === 'End') {
            goToPage(totalPages);
            playClickSound();
        }
    });

    // Touch gesta pro mobilní zařízení
    comicPages.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    comicPages.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    // Kliknutí na panely pro animaci
    document.addEventListener('click', (e) => {
        if (e.target.closest('.panel')) {
            const panel = e.target.closest('.panel');
            panel.classList.add('clicked');
            setTimeout(() => {
                panel.classList.remove('clicked');
            }, 300);
        }
    });

    // Auto-save pozice
    window.addEventListener('beforeunload', () => {
        saveProgress();
    });
}

/**
 * Zpracování swipe gesta
 */
function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe vlevo = další stránka
            nextPage();
        } else {
            // Swipe vpravo = předchozí stránka
            previousPage();
        }
        playClickSound();
    }
}

// ========================================
// NAVIGACE
// ========================================

/**
 * Zobrazení konkrétní stránky
 */
function showPage(pageNumber) {
    // Validace
    if (pageNumber < 1 || pageNumber > totalPages) {
        console.warn(`⚠️ Neplatné číslo stránky: ${pageNumber}`);
        return;
    }

    currentPage = pageNumber;

    // Skrýt všechny stránky
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Zobrazit aktuální stránku
    const activePage = document.querySelector(`.page[data-page="${currentPage}"]`);
    if (activePage) {
        activePage.classList.add('active');
    }

    // Aktualizovat UI
    updateUI();

    console.log(`📄 Zobrazena stránka ${currentPage}/${totalPages}`);
}

/**
 * Přejít na další stránku
 */
function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
        playPageTurnSound();
    }
}

/**
 * Přejít na předchozí stránku
 */
function previousPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
        playPageTurnSound();
    }
}

/**
 * Přejít na konkrétní stránku
 */
function goToPage(pageNumber) {
    showPage(pageNumber);
    playPageTurnSound();
}

/**
 * Aktualizace UI prvků
 */
function updateUI() {
    // Aktualizovat čítač stránek
    currentPageSpan.textContent = currentPage;

    // Aktualizovat progress bar
    const progress = (currentPage / totalPages) * 100;
    progressBar.style.width = `${progress}%`;

    // Aktualizovat tlačítka
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    // Aktualizovat tečky
    const dots = document.querySelectorAll('.page-dot');
    dots.forEach((dot, index) => {
        if (index + 1 === currentPage) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Uložit progres
    saveProgress();
}

// ========================================
// UKLÁDÁNÍ POSTUPU
// ========================================

/**
 * Uložení aktuálního postupu do localStorage
 */
function saveProgress() {
    try {
        localStorage.setItem('pipi-komiks-page', currentPage);
        console.log(`💾 Uložena pozice: stránka ${currentPage}`);
    } catch (error) {
        console.warn('⚠️ Nepodařilo se uložit progres:', error);
    }
}

/**
 * Načtení uloženého postupu
 */
function loadSavedProgress() {
    try {
        const savedPage = localStorage.getItem('pipi-komiks-page');
        if (savedPage) {
            const pageNumber = parseInt(savedPage, 10);
            if (pageNumber >= 1 && pageNumber <= totalPages) {
                showPage(pageNumber);
                console.log(`📂 Načtena uložená pozice: stránka ${pageNumber}`);

                // Zobrazit notifikaci
                showNotification(`Pokračujete od stránky ${pageNumber}`);
            }
        }
    } catch (error) {
        console.warn('⚠️ Nepodařilo se načíst progres:', error);
    }
}

/**
 * Reset postupu
 */
function resetProgress() {
    try {
        localStorage.removeItem('pipi-komiks-page');
        goToPage(1);
        showNotification('Progres resetován');
        console.log('🔄 Progres resetován');
    } catch (error) {
        console.warn('⚠️ Nepodařilo se resetovat progres:', error);
    }
}

// ========================================
// ANIMACE A EFEKTY
// ========================================

/**
 * Úvodní animace
 */
function playWelcomeAnimation() {
    const header = document.querySelector('.comic-header');
    header.style.animation = 'fadeIn 1s ease';

    // Postupné zobrazení prvního panelu
    setTimeout(() => {
        const firstPagePanels = document.querySelectorAll('.page[data-page="1"] .panel');
        firstPagePanels.forEach((panel, index) => {
            setTimeout(() => {
                panel.style.animation = 'fadeIn 0.5s ease';
            }, index * 100);
        });
    }, 500);
}

/**
 * Zobrazení notifikace
 */
function showNotification(message) {
    // Vytvořit notifikaci
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4ECDC4 0%, #45B7AA 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        border: 3px solid #2C3E50;
        box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Automaticky odstranit po 3 sekundách
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ========================================
// ZVUKOVÉ EFEKTY (Webové Audio API)
// ========================================

/**
 * Vytvoření zvukového kontextu
 */
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

/**
 * Přehrání kliknutí
 */
function playClickSound() {
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
        // Tiše ignorovat chyby zvuku
    }
}

/**
 * Přehrání obrácení stránky
 */
function playPageTurnSound() {
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2);
        oscillator.type = 'triangle';

        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
        // Tiše ignorovat chyby zvuku
    }
}

// ========================================
// EASTER EGGS A SPECIÁLNÍ FUNKCE
// ========================================

/**
 * Konami kód pro speciální efekt
 */
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

/**
 * Duhový mód
 */
function activateRainbowMode() {
    showNotification('🌈 DUHOVÝ MÓD AKTIVOVÁN! 🌈');

    const container = document.querySelector('.comic-container');
    container.style.animation = 'rainbow 3s linear infinite';

    // Přidat CSS pro rainbow animaci
    if (!document.getElementById('rainbow-style')) {
        const style = document.createElement('style');
        style.id = 'rainbow-style';
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    // Vypnout po 10 sekundách
    setTimeout(() => {
        container.style.animation = '';
        showNotification('Duhový mód vypnut');
    }, 10000);
}

/**
 * Double-click na název pro reset
 */
document.querySelector('.comic-title').addEventListener('dblclick', () => {
    if (confirm('Chcete resetovat progres a začít od začátku?')) {
        resetProgress();
    }
});

// ========================================
// POMOCNÉ FUNKCE
// ========================================

/**
 * Detekce mobilního zařízení
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Zobrazení nápovědy
 */
function showHelp() {
    const helpText = `
📖 NÁPOVĚDA K OVLÁDÁNÍ:

🖱️ Myš/Touch:
- Klikněte na tlačítka "Předchozí" / "Další"
- Klikněte na tečky pro přechod na konkrétní stránku
- Na mobilním zařízení můžete přejíždět prstem (swipe)

⌨️ Klávesnice:
- Šipka vlevo (←) = předchozí stránka
- Šipka vpravo (→) = další stránka
- Home = první stránka
- End = poslední stránka

💾 Ukládání:
- Váš postup se automaticky ukládá
- Double-click na název komiksu = reset postupu

🎨 Easter Egg:
- Zkuste najít tajný Konami kód! ↑↑↓↓←→←→BA

Užijte si čtení! 😊
    `;

    alert(helpText);
}

// Přidat tlačítko nápovědy (volitelné)
if (window.location.search.includes('help=true')) {
    showHelp();
}

// ========================================
// EXPORT PRO DEBUGOVÁNÍ
// ========================================

// V produkci můžete odstranit
window.comicDebug = {
    getCurrentPage: () => currentPage,
    getTotalPages: () => totalPages,
    goToPage: goToPage,
    resetProgress: resetProgress,
    showHelp: showHelp,
    activateRainbowMode: activateRainbowMode
};

console.log('💡 Pro nápovědu otevřete: ?help=true');
console.log('🐛 Pro debug použijte: window.comicDebug');
