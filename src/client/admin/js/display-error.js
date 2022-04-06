function displayError(errorText) {
    // const page = document.getElementById('page');
    const errorDiv = document.querySelector('.errorMessage');
    const error = document.createElement('p');
    error.innerText = errorText;
    error.classList.add('error', 'alert', 'alert-danger');
    errorDiv.appendChild(error);
    // page.appendChildren(errorDiv);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error');

    errorMessages.forEach((error) => error.remove());
}
