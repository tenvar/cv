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

    const header = document.querySelector('.header');
    let headerRect = header ? header.getBoundingClientRect() : null;
    let mouseX = 0, mouseY = 0, rafId = null;

    function updateHeaderGradient() {
        if (!headerRect) return;
        const moveX = (mouseX / headerRect.width - 0.5) * 30;
        const moveY = (mouseY / headerRect.height - 0.5) * 30;
        header.style.setProperty('--mouse-x', moveX + 'px');
        header.style.setProperty('--mouse-y', moveY + 'px');
        rafId = null;
    }

    document.addEventListener('mousemove', function(e) {
        if (!headerRect) return;
        mouseX = e.clientX - headerRect.left;
        mouseY = e.clientY - headerRect.top;
        if (!rafId) rafId = requestAnimationFrame(updateHeaderGradient);
    });
    window.addEventListener('resize', function() {
        if (header) headerRect = header.getBoundingClientRect();
    });
}); 