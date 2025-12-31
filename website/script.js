document.addEventListener('DOMContentLoaded', function() {
    // Initialize functionality
    setupNavigation();
    setupMenuSearch();
    setupFormValidation();
});

/**
 * Setup smooth scrolling navigation
 */
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Setup menu search functionality
 */
function setupMenuSearch() {
    const searchInput = document.getElementById('menu-search');
    const menuItems = document.querySelectorAll('.menu-item');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();

        menuItems.forEach(item => {
            const itemName = item.getAttribute('data-name').toLowerCase();
            const itemTitle = item.querySelector('h3').textContent.toLowerCase();
            const itemDesc = item.querySelector('p').textContent.toLowerCase();

            // Check if search term matches name, title, or description
            if (itemName.includes(searchTerm) ||
                itemTitle.includes(searchTerm) ||
                itemDesc.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

/**
 * Setup form validation and submission
 */
function setupFormValidation() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const inputs = form.querySelectorAll('input, textarea');

    // Real-time validation on blur
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearError(input));
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            console.log('Form submitted:', data);

            // Show success message
            form.style.display = 'none';
            successMessage.classList.remove('hidden');

            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                successMessage.classList.add('hidden');
            }, 3000);
        } else {
            // Focus first error field
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.focus();
            }
        }
    });
}

/**
 * Validate a single form field
 * @param {HTMLElement} field - The form field to validate
 * @returns {boolean} - Whether the field is valid
 */
function validateField(field) {
    const errorSpan = field.parentElement.querySelector('.error-message');

    if (!field.validity.valid) {
        if (field.validity.valueMissing) {
            errorSpan.textContent = 'This field is required';
        } else if (field.validity.typeMismatch) {
            errorSpan.textContent = 'Please enter a valid ' + field.type;
        } else if (field.validity.tooShort) {
            errorSpan.textContent = `Minimum ${field.minLength} characters required`;
        } else if (field.validity.patternMismatch) {
            errorSpan.textContent = 'Please match the required format';
        }
        field.classList.add('error');
        return false;
    }

    clearError(field);
    return true;
}

/**
 * Clear error state from a field
 * @param {HTMLElement} field - The form field to clear
 */
function clearError(field) {
    const errorSpan = field.parentElement.querySelector('.error-message');
    errorSpan.textContent = '';
    field.classList.remove('error');
}
