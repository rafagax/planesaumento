document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the 'fade-in-up' class
    const animatedElements = document.querySelectorAll('.fade-in-up');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the animation
                entry.target.classList.add('visible');
                // Stop observing the element once it has been revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each element
    animatedElements.forEach(el => observer.observe(el));
});
