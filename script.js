document.addEventListener("DOMContentLoaded", function() {
    var loading = document.getElementById('loading');
    var authBox = document.getElementById('auth-box');
    var mainContent = document.getElementById('main-content');

    // Show loading screen for 3 seconds
    setTimeout(function() {
        loading.style.display = 'none';
        authBox.style.display = 'block';
    }, 3000);

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        authBox.style.display = 'none';
        mainContent.style.display = 'block';
    });

    // Handle sign-up link click
    document.getElementById('signup-link').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Sign-up functionality is not yet implemented.');
    });
});