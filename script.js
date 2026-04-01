document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animation for cards
    const cards = document.querySelectorAll('.card');
    
    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver(revealOnScroll, observerOptions);

    // Scroll tracking for animations only
    cards.forEach((card) => {
        // Initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1)`;
        scrollObserver.observe(card);
    });

    // Parallax effect for the background glow
    document.addEventListener('mousemove', (e) => {
        const glow = document.querySelector('.bg-glow');
        if (glow) {
            const x = (e.clientX / window.innerWidth - 0.5) * 50;
            const y = (e.clientY / window.innerHeight - 0.5) * 50;
            glow.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
});
