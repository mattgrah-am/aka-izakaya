function loginCheck() {
  axios
    .get("/api/session/")
    .then((response) => {
      const user = response.data.email;
      renderAdminHeader(user);
    })
    .catch((error) => {
      renderLogin();
    });
}

function renderLogin() {
  const header = document.querySelector("#header-nav");
  const page = document.querySelector("#page");
  const div = document.createElement("div");
  header.replaceChildren(div);
  page.innerHTML = "";
  div.innerHTML = `
    <div class="vh-100 vw-100 d-flex flex-column align-items-center mt-5">
        <p class="logo-font mb-0">Aka Izakaya</p>
        <div class="border border-dark p-4 rounded bg-light shadow">
            <form id="login-form" action="/api/session" method="POST">
            
                <h3 class="border-bottom border-dark mb-3 pb-2">Login</h3>
                <div class="mb-3">
                    <label for="email" class="form-label" style="color: black">Email address</label>
                    <input type="email" class="form-control" name="email" id="email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label" style="color: black">Password</label>
                    <input type="password" class="form-control" name="password" id="password">
                </div>
                <div class="errorMessage"></div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
  `;

  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    const emailField = document.querySelector("#email");
    const passwordField = document.querySelector("#password");
    const body = {
      email: emailField.value,
      password: passwordField.value,
    };
    let error = null;
    if (body.email === "") {
      error = "Email is required";
    } else if (body.password === "") {
      error = "Password is required";
    }

    if (!error) {
      axios
        .post("/api/session/", body)
        .then((response) => {
          console.log(response);
          renderAdminAbout();
          renderAdminHeader();
        })
        .catch((error) => {
          console.log(error.data);
          displayError(error.response.data.message);
        });
    } else {
      console.log(error);
      displayError(error);
    }
  });
}
