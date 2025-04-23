// JavaScript Features
document.getElementById('newsletterForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
});

document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent. We will get back to you soon!');
});
