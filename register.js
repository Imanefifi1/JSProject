document.getElementById('submit').addEventListener('click', function(event) {
    const username = document.getElementById('inp1').value.trim();
    const email = document.getElementById('inp2').value.trim();
    const password = document.getElementById('inp3').value.trim();
    const confirmPassword = document.getElementById('inp4')?.value.trim();

    let valid = true;

 
    if (username === '') {
        document.getElementById('sp1').textContent = "Username is required.";
        valid = false;
    } else {
        document.getElementById('sp1').textContent = '';
    }

 
    if (email === '') {
        document.getElementById('sp2').textContent = "Email is required.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('sp2').textContent = "Invalid email format.";
        valid = false;
    } else {
        document.getElementById('sp2').textContent = '';
    }


    if (password === '') {
        document.getElementById('sp3').textContent = "Password is required.";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('sp3').textContent = "Password must be at least 6 characters.";
        valid = false;
    } else {
        document.getElementById('sp3').textContent = '';
    }

    if (confirmPassword !== undefined && confirmPassword !== password) {
        document.getElementById('sp4').textContent = "Passwords do not match.";
        valid = false;
    } else {
        document.getElementById('sp4').textContent = '';
    }

    if (!valid) {
        event.preventDefault();
    }
});

function updateForm() {
    const role = document.getElementById('role').value;
    const roleFields = document.getElementById('roleFields');

    if (role === 'user') {
        roleFields.innerHTML = `
            <div class="user">
                <label for="inp1">Username:</label> <br>
                <input id="inp1" type="text" name="username" placeholder="Enter your Username" required>
                <span id="sp1" style="color: rgb(231, 18, 18);"></span> <br>
            </div>
            <div class="user">
                <label for="inp2">Email:</label> <br>
                <input id="inp2" type="email" name="email" placeholder="Enter your email" required>
                <span id="sp2" style="color: rgb(231, 18, 18);"></span> <br>
            </div>
            <div class="user">
                <label for="inp3">Password:</label> <br>
                <input id="inp3" type="password" name="password" placeholder="Enter your password" required> <br>
                <span id="sp3" style="color: rgb(231, 18, 18);"></span> <br>
            </div>
            <div class="user">
                <label for="inp4">Confirm password:</label> <br>
                <input id="inp4" type="password" name="confirmPassword" placeholder="Confirm your password" required>
                <span id="sp4" style="color: rgb(231, 18, 18);"></span>
                </div>`;
    } else if (role === 'admin') {
        roleFields.innerHTML = `
            <div class="user">
                <label for="inp1">Doctor Name:</label> <br>
                <input id="inp1" type="text" name=docName" placeholder="Enter your Name" required>
                <span id="sp1" style="color: rgb(231, 18, 18);"></span> <br>
            </div>
            <div class="user">
                <label for="inp2">Email:</label> <br>
                <input id="inp2" type="email" name="email" placeholder="Enter your email" required>
                <span id="sp2" style="color: rgb(231, 18, 18);"></span> <br>
            </div>
            <div class="user">
                <label for="docCode">Doctor Code:</label> <br>
                <input id="docCode" type="text" name="docCode" placeholder="Enter doctor Code" required>
            </div>
            <div class="user">
                <label for="inp3">Password:</label> <br>
                <input id="inp3" type="password" name="password" placeholder="Enter your password" required> <br>
                <span id="sp3" style="color: rgb(231, 18, 18);"></span> <br>
            </div>
            <div class="user">
                <label for="inp4">Confirm password:</label> <br>
                <input id="inp4" type="password" name="confirmPassword" placeholder="Confirm your password" required>
                <span id="sp4" style="color: rgb(231, 18, 18);"></span>
                </div>`;
    }
}

document.getElementById('role').addEventListener('change', updateForm);