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

// Check if there is already a user logged in.
loginCheck();

// If not, send to login page. If they are, render the admin page
if (!user) {
    renderLogin();
} else {
    renderAdminHeader();
    renderAdminAbout();
}
