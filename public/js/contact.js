// Since the project description does not specify any specific functionality for the contact.js file, 
// we will just add a simple console log to confirm that the file is linked correctly.

console.log("contact.js file is linked correctly");

// Additionally, we can add a simple form submission handler to prevent the default form submission behaviour
// and instead log the form data to the console.

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    });
});
