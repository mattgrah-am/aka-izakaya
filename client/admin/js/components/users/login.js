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
    <div id="adminHeader">
        <h1 class="logo-font">Aka Izakaya</h1>
    </div>
    <div class="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
    <form id="login-form" action="/api/session" method="POST">
    <div class="mb-3">
      <label for="email" class="form-label" style="color: black">Email address</label>
      <input type="email" class="form-control" name="email" id="email">
    </div>
    <div class="mb-3">
      <label for="password" class="form-label" style="color: black">Password</label>
      <input type="password" class="form-control" name="password" id="password">
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
  </div>
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
                renderAdminAbout()
                renderAdminHeader();
            })
            .catch((error) => {
                console.log(error.data);
                // displayError(error.response.data.message);
            });
    });
}
