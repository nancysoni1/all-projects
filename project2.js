document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
  
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('.reg-input[type="username"]').value;
      const email = document.querySelector('.reg-input[type="email"]').value;
      const password = document.getElementById('.reg-input[type="password"]').value;
  
      // Basic validation
      if (!username || !email || !password) {
        document.getElementById('regError').innerText = 'Please fill in all fields';
        return;
      }
  
      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify({ username, email, password }));
  
      // Display success message
      document.getElementById('regError').innerText = '';
      alert('Registration successful! You can now login.');
      registrationForm.reset();
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
      // Retrieve user data from local storage
      const user = JSON.parse(localStorage.getItem('user'));
  
      // Check if user exists and password matches
      if (!user || user.email !== email || user.password !== password) {
        document.getElementById('loginError').innerText = 'Invalid email or password';
        return;
      }
  
      // Display success message
      document.getElementById('loginError').innerText = '';
      alert('Login successful! Welcome, ' + user.username);
      loginForm.reset();
    });
  });
  let teamScript = `// Welcome to our team's script
function greet() {
    console.log("Hello, world!");
}`;

// Display the team script on page load
document.getElementById('scriptContent').textContent = teamScript;

// Function to save the edited script
function saveScript() {
    let editedScript = document.getElementById('scriptTextarea').value;
    teamScript = editedScript;
    // Update the displayed script
    document.getElementById('scriptContent').textContent = teamScript;
    alert('Script saved successfully!');
}

// Attach saveScript function to the save button
document.getElementById('saveButton').addEventListener('click', saveScript);

