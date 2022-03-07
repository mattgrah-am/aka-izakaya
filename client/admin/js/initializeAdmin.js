function loginCheck() {
  axios
    .get("/api/session/")
    .then((response) => {
      const user = response.data.email;
      renderAdminHeader(user);
      if (!user) {
        renderLogin();
      } else {
        renderAdminAbout();
        renderAdminHeader(user);
      }
    })
    .catch((error) => {
      renderLogin();
    });
}

// Check if there is already a user logged in.
loginCheck();
