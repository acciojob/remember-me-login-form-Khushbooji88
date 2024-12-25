window.onload = function() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    
    if (savedUsername && savedPassword) {
        document.getElementById('existing').style.display = 'block';
    }
    
    // Event listener for form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
    
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;
    
        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
    
        alert('Logged in as ' + username);
    });
    
    // Event listener for existing user login button
    document.getElementById('existing').addEventListener('click', function() {
        const savedUsername = localStorage.getItem('username');
        alert('Logged in as ' + savedUsername);
    });
    };