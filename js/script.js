document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });

    const modal = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close-btn');
    if (modal && closeBtn) {
        modal.style.display = 'flex';
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
});

document.addEventListener('mousemove', function(e) {
    const header = document.querySelector('.header');
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const moveX = (x / rect.width - 0.5) * 30;
        const moveY = (y / rect.height - 0.5) * 30;
        header.style.setProperty('--mouse-x', moveX + 'px');
        header.style.setProperty('--mouse-y', moveY + 'px');
    }
}); 