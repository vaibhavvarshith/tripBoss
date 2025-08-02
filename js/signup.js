document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!name || !email || !password) {
    alert("Please fill all fields.");
    return;
  }

  alert(`Welcome ${name}, your account has been created!`);
  this.reset();
});
