function checkPassword() {
  const input = document.getElementById('password').value;
  const correctPassword = '12345';
  const errorDiv = document.getElementById('error');

  if (input === correctPassword) {
    window.location.href = 'https://example.com'; // Ganti ke link tujuanmu
  } else {
    errorDiv.textContent = '❌ Password salah. Coba lagi.';
    errorDiv.classList.add('show');
  }
}
