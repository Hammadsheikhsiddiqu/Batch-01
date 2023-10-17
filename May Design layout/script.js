// Smooth scrolling for navigation links
document.querySelectorAll('navigation a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    // You can add your own logic here to handle the form submission, e.g., sending data to a server.

    // For this example, we'll just log the form data.
    console.log('Form submitted with the following data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can also display a confirmation message or redirect the user after form submission.
});
