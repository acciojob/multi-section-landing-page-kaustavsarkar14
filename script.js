//your JS code here. If required.



function validateForm() {
        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;

        // Simple email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email address');
            return;
        }

        // Simple phone number validation
        var phoneRegex = /^[0-9]{10}$/;
        if (phone && !phoneRegex.test(phone)) {
            alert('Invalid phone number');
            return;
        }

        // Check if the message has at least 100 characters
        if (message.length < 100) {
            alert('Message must be at least 100 characters');
            return;
        }

        // If all validations pass, you can submit the form (here, we're just logging to console)
        console.log('Form submitted successfully!');
        // In a real scenario, you would make a POST request to a server here.
    }