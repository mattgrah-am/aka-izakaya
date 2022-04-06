function logout() {
    axios.delete('/api/session/').then((response) => {
        const user = response.data.email;
        renderLogin();
    });
}
