function loginCheck() {
    axios
        .get('/api/session/')
        .then((response) => {
            const user = response.data.email;
            renderAdminHeader(user);
        })
        .catch((error) => {
            renderLogin();
        });
}

function renderLogin() {
    const page = document.querySelector('#page');
    const div = document.createElement('div');
    page.replaceChildren(div);
    div.innerHTML = `
      <form id="login-form" action="/api/session" method="POST">
        <p id="error-msg" class="error hidden"></p>
        <label for="email">email: </label>
        <input type="email" name="email" id="email">
        <label for="password">Password: </label>
        <input type="password" name="password" id="password">
        <button type="submit">Login</button>
      </form>
  `;

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailField = document.querySelector('#email');
        const passwordField = document.querySelector('#password');
        const body = {
            email: emailField.value,
            password: passwordField.value,
        };
        axios
            .post('/api/session/', body)
            .then((response) => {
                console.log(response);
                renderAdminHeader();
            })
            .catch((error) => {
                console.log(error.data);
                // displayError(error.response.data.message);
            });
    });
}
