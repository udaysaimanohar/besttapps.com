// Function to include header and footer in all pages
document.addEventListener('DOMContentLoaded', function() {
    // Include header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            // Re-attach event listeners after loading header
            attachHeaderEventListeners();
        })
        .catch(error => console.error('Error loading header:', error));

    // Include footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Function to attach event listeners for header functionality
function attachHeaderEventListeners() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropBtn = document.querySelector('.dropdown .dropbtn');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });
        
        mobileMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                navLinks.classList.toggle('active');
                e.preventDefault();
            }
        });
    }

    if (dropBtn) {
        dropBtn.addEventListener('click', function(e) {
            const isMobile = window.matchMedia('(max-width: 820px)').matches;
            if (isMobile) {
                e.preventDefault();
                this.parentElement.classList.toggle('open');
            }
        });
    }
}

// Initialize AOS after content is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});
