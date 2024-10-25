document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action for now
        console.log(`${this.textContent} link clicked`);
    });
});