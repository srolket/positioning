const openBtn = document.getElementById('lightboxBtn');
const overlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('modalCloseBtn');

function openModal() {
    overlay.style.display = 'flex';

    bar.style.width = '0%';
    textWhite.style.clipPath = 'inset(0 100% 0 0)';

    animateProgress();
}

function closeModal() {
    overlay.style.display = 'none';
}

openBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.style.display === 'flex') {
        closeModal();
    }
});

const bar = document.querySelector('.bar');
const textWhite = document.querySelector('.text-white');

function animateProgress() {
    let progress = 0;

    const duration = 3000;
    const fps = 60;
    const stepTime = 1000 / fps;
    const step = 100 / (duration / stepTime);

    const interval = setInterval(() => {
        progress += step;

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
        }

        bar.style.width = progress + '%';

        textWhite.style.clipPath = `inset(0 ${100 - progress}% 0 0)`;

    }, stepTime);
}