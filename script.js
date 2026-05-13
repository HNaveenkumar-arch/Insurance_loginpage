function toggleForm() {
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('signup-form').classList.toggle('hidden');
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(id, errorId, condition) {
    const field = document.getElementById(id);
    const error = document.getElementById(errorId);
    if (condition) {
        field.style.borderColor = '#222';
        error.style.display = 'none';
        return true;
    } else {
        field.style.borderColor = '#ff3333';
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
        localStorage.setItem("userMail",email);
        btn.innerHTML = `<div class="spinner"></div> Authorizing...`;
        btn.disabled = true;
        if(role == 'agent'){
            window.location.href='agent-dashboard.html'
        }
        else if(role == 'client'){
            window.location.href='client-dashboard.html'
        }
        // setTimeout(() => {
        //     window.location.href = `dashboard.html?role=${role}`;
        // }, 1200);
    }
}

function validateSignUp() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;

    const nV = validateField('reg-name', 'reg-name-error', name.trim() !== "");
    const eV = validateField('reg-email', 'reg-email-error', emailRegex.test(email));
    const pV = validateField('reg-pass', 'reg-pass-error', pass.length >= 8);

    if (nV && eV && pV) {
        alert("Account Securely Created!");
        toggleForm();
    }
}