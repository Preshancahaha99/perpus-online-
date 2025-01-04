document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    if (username === 'Presha Fitriyani' && password === '241011700781') {
      alert('Login successful!');
      errorMessage.textContent = '';
      window.location.href = 'baca.html'; 
    } else {
      errorMessage.textContent = 'Invalid username or password.';
    }
  });

  console.log('Form Submitted'); // Pastikan form ter-submit
console.log(username, password);
  
  