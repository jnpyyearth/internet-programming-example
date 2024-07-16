document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const countrySelect = document.getElementById('country');
    const stateContainer = document.getElementById('stateContainer');
    const stateSelect = document.getElementById('state');
    const addInterestButton = document.getElementById('addInterest');
    const interestsContainer = document.getElementById('interestsContainer');
    const errorMessages = document.getElementById('errorMessages');
    const successMessage = document.getElementById('successMessage');

    // Dynamic state/province selection
    countrySelect.addEventListener('change', function() {
        stateSelect.innerHTML = '';
        if (this.value === 'USA') {
            stateContainer.classList.remove('hidden');
            ['California', 'New York', 'Texas'].forEach(state => {
                let option = new Option(state, state);
                stateSelect.add(option);
            });
        } else if (this.value === 'Canada') {
            stateContainer.classList.remove('hidden');
            ['Ontario', 'Quebec', 'British Columbia'].forEach(province => {
                let option = new Option(province, province);
                stateSelect.add(option);
            });
        } else {
            stateContainer.classList.add('hidden');
        }
    });

    // Add custom interest
    addInterestButton.addEventListener('click', function() {
        let customInterest = prompt('Enter your custom interest:');
        if (customInterest) {
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'interests';
            checkbox.value = customInterest.toLowerCase();
            interestsContainer.appendChild(checkbox);
            interestsContainer.appendChild(document.createTextNode(' ' + customInterest));
        }
    });

    // Form validation and submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        errorMessages.innerHTML = '';
        let errors = [];

        // Validate username
        if (form.username.value.length < 3) {
            errors.push('Username must be at least 3 characters long');
        }

        // Validate email
        if (!form.email.value.includes('@')) {
            errors.push('Please enter a valid email address');
        }

        // Validate password
        if (form.password.value.length < 6) {
            errors.push('Password must be at least 6 characters long');
        }

        // Validate country selection
        if (!form.country.value) {
            errors.push('Please select a country');
        }

        // Display errors or success message
        if (errors.length > 0) {
            errorMessages.innerHTML = errors.join('<br>');
        } else {
            // Simulate form submission
            console.log('Form submitted:', new FormData(form));
            form.reset();
            successMessage.classList.remove('hidden');
            setTimeout(() => successMessage.classList.add('hidden'), 3000);
        }
    });
});