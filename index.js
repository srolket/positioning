const openBtn = document.getElementById('lightboxBtn');
const overlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('modalCloseBtn');

function openModal() {
    overlay.style.display = 'flex';
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