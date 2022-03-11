function checkMessages() {
    axios.get('/api/contact/').then((response) => {
        message = response.data;
        let messageButton = document.querySelector('#message-button');
        message.forEach((message) => {
            if (message.unread === true) {
                messageButton.classList.add('unread-message');
            } else {
                messageButton.classList.remove('unread-message');
            }
        });
    });
}
