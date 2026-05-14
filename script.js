function toggleForm() {
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('signup-form').classList.toggle('hidden');
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(id, errorId, condition) {
    const field = document.getElementById(id);
    const error = document.getElementById(errorId);
    if (condition) {
        field.style.borderColor = '#27272a';
        error.style.display = 'none';
        return true;
    } else {
        field.style.borderColor = '#ef4444';
        error.style.display = 'block';
        return false;
    }
}

function togglePasswordVisibility() {
    const passInput = document.getElementById('login-pass');
    const eyeIcon = document.getElementById('eye-icon');
    if (passInput.type === 'password') {
        passInput.type = 'text';
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        passInput.type = 'password';
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
    }
}

function validateLogin() {
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;
    const role = document.getElementById('role-select').value;
    const btn = document.querySelector('.login-btn');

    const eV = validateField('login-email', 'login-email-error', emailRegex.test(email));
    const pV = validateField('login-pass', 'login-pass-error', pass.length >= 8);

    if (eV && pV) {
        localStorage.setItem("userMail", email);
        btn.innerHTML = `<div class="spinner"></div> Signing In...`;
        btn.disabled = true;
        setTimeout(() => {
            if (role == 'agent') {
                window.location.href = 'agent-dashboard.html';
            } else if (role == 'client') {
                window.location.href = 'client-dashboard.html';
            }
        }, 1000);
    }
}

function validateSignUp() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;
    const confirmPass = document.getElementById('reg-pass-confirm').value;
    const nV = validateField('reg-name', 'reg-name-error', name.trim() !== "");
    const eV = validateField('reg-email', 'reg-email-error', emailRegex.test(email));
    const pV = validateField('reg-pass', 'reg-pass-error', pass.length >= 8);
    const cpV = validateField('reg-pass-confirm', 'reg-pass-confirm-error', confirmPass === pass && confirmPass.length > 0);
    if (nV && eV && pV && cpV) {
        alert("Account Securely Created!");
        toggleForm();
        document.getElementById('reg-name').value = '';
        document.getElementById('reg-email').value = '';
        document.getElementById('reg-pass').value = '';
        document.getElementById('reg-pass-confirm').value = '';
    }
}