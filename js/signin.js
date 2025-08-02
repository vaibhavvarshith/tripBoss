document.getElementById('signin-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  alert(`Welcome back! You are now signed in.`);
  this.reset();
});
